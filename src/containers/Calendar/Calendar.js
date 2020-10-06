import React, { useEffect, useState } from 'react';
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

import appointments from './Apointments';

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
	const [data, setData] = useState(appointments);

	const commitChanges = ({added, changed, deleted}) => {
		let newData;
		if (added) {
			const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
			newData = [...data, {id: startingAddedId, ...added}];
		}
		if (changed) {
			newData = data.map(appointment => (
				changed[appointment.id] ? {...appointment, ...changed[appointment.id]} : appointment));
		}
		if (deleted !== undefined) {
			newData = data.filter(appointment => appointment.id !== deleted);
		}

		setData(newData);
	};

	useEffect(() => {
		if(!data){
			console.log('effect called without change - by default');
		}
		else{
			console.log('effect called with change ');
		}
	}, [data]);

	return (
		<Paper>
			<Scheduler
				data={data}
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

export default Calendar;
