import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	DayView,
	WeekView,
	Toolbar,
	TodayButton,
	DateNavigator,
	ViewSwitcher,
	Appointments,
	AppointmentTooltip,
	AppointmentForm,
	ConfirmationDialog
} from '@devexpress/dx-react-scheduler-material-ui';

import * as actions from '../../store/actions/index';
import {connect} from "react-redux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios";

const currentDate = new Date();

const messages = {
	moreInformationLabel: '',
};

const TextEditor = (props) => {
	// eslint-disable-next-line react/destructuring-assignment
	if (props.type === 'multilineTextEditor') {
		return null;
	} return <AppointmentForm.TextEditor {...props} />;
};

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
	const onCustomFieldChange = (nextValue) => {
		onFieldChange({ customField: nextValue });
	};

	return (
		<AppointmentForm.BasicLayout
			appointmentData={appointmentData}
			onFieldChange={onFieldChange}
			{...restProps}
		>
			<AppointmentForm.Label
				text="Custom Field"
				type="title"
			/>
			<AppointmentForm.TextEditor
				value={appointmentData.customField}
				onValueChange={onCustomFieldChange}
				placeholder="Custom field"
			/>
		</AppointmentForm.BasicLayout>
	);
};

const Calendar = (props) => {
	const commitChanges = ({added, changed, deleted}) => {
		if (added) {
			const startingAddedId = props.events.length > 0 ? props.events[props.events.length - 1].id + 1 : 0;
			const newEvent = {id: startingAddedId, ...added};

			props.onAddEvent(newEvent, props.events)
		}
		if (changed) {
			const oldEvent = props.events.find(event => changed[event.id]);
			const changedEvent = Object.assign({}, oldEvent, changed[oldEvent.id]);

			props.onChangeEvent(changedEvent, props.events);
		}
		if (deleted !== undefined) {
			props.onRemoveEvent(deleted, props.events);
		}
	};

	useEffect(() => {
		props.onFetchEvents();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Paper>
			<Scheduler
				data={props.events}
			>
				<ViewState
					defaultCurrentDate={currentDate}
					defaultCurrentViewName="Week"
				/>
				<EditingState
					onCommitChanges={commitChanges}
				/>
				<IntegratedEditing />

				<DayView
					startDayHour={9}
					endDayHour={18}
				/>
				<WeekView
					startDayHour={10}
					endDayHour={19}
				/>
				<Toolbar/>
				<DateNavigator/>
				<TodayButton/>
				<ViewSwitcher/>
				<Appointments/>
				<AppointmentTooltip
					showOpenButton
					showDeleteButton
				/>
				<ConfirmationDialog />
				<AppointmentForm
					basicLayoutComponent={BasicLayout}
					textEditorComponent={TextEditor}
					messages={messages}
				/>
			</Scheduler>
		</Paper>
	);
};


const mapStateToProps = state => {
	return {
		events: state.events.events,
		loading: state.events.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchEvents: () => {
			dispatch(actions.fetchEvents());
		},
		onAddEvent: (newEvent, events) => {
			dispatch(actions.addEvent(newEvent, events));
		},
		onChangeEvent: (event, events) => {
			dispatch(actions.changeEvent(event, events));
		},
		onRemoveEvent: (EventId, events) => {
			dispatch(actions.removeEvent(EventId, events));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withErrorHandler(Calendar, axios));
