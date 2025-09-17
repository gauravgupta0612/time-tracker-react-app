import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import './TimeTrackerForm.css';

// 1. Define the validation schema using Zod
const timeEntrySchema = z.object({yield
  employeeName: z.string().min(2, { message: "Employee name must be at least 2 characters long" }),
  project: z.string().min(1, { message: "Project/Task is required" }),
  date: z.string().min(1, { message: "Date is required" }), // HTML date input returns a string
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, { message: "Invalid start time format (HH:MM)" }),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, { message: "Invalid end time format (HH:MM)" }),
  notes: z.string().max(500, { message: "Notes cannot exceed 500 characters" }).optional(),
}).refine(data => {
    // 2. Custom validation to ensure end time is after start time
    if (!data.startTime || !data.endTime) return true; // Don't validate if times are not set
    return data.endTime > data.startTime;
}, {
    message: "End time must be after start time",
    path: ["endTime"], // Show the error on the endTime field
});

const TimeTrackerForm = () => {
  // 3. Initialize react-hook-form and connect it with Zod
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(timeEntrySchema),
    defaultValues: {
      employeeName: "",
      project: "",
      date: new Date().toISOString().split('T')[0], // Set default date to today
      startTime: "",
      endTime: "",
      notes: ""
    }
  });

  // 4. Handle form submission
  const onSubmit = (data) => {
    console.log("Form Submitted Successfully:", data);
    // In a real application, you would send this data to your backend API
    alert('Time entry submitted successfully! Check the browser console for the data.');
    reset(); // Reset the form fields after successful submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="time-tracker-form" noValidate>
      <h2>Employee Time Tracker</h2>

      <div className="form-group">
        <label htmlFor="employeeName">Employee Name</label>
        <input id="employeeName" {...register("employeeName")} />
        {errors.employeeName && <p className="error-message">{errors.employeeName.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="project">Project / Task</label>
        <input id="project" {...register("project")} />
        {errors.project && <p className="error-message">{errors.project.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input id="date" type="date" {...register("date")} />
        {errors.date && <p className="error-message">{errors.date.message}</p>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="startTime">Start Time</label>
          <input id="startTime" type="time" {...register("startTime")} />
          {errors.startTime && <p className="error-message">{errors.startTime.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="endTime">End Time</label>
          <input id="endTime" type="time" {...register("endTime")} />
          {errors.endTime && <p className="error-message">{errors.endTime.message}</p>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes (Optional)</label>
        <textarea id="notes" {...register("notes")} rows="3" />
        {errors.notes && <p className="error-message">{errors.notes.message}</p>}
      </div>

      <button type="submit">Submit Time Entry</button>
    </form>
  );
};

export default TimeTrackerForm;import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import './TimeTrackerForm.css';

// 1. Define the validation schema using Zod
const timeEntrySchema = z.object({
  employeeName: z.string().min(2, { message: "Employee name must be at least 2 characters long" }),
  project: z.string().min(1, { message: "Project/Task is required" }),
  date: z.string().min(1, { message: "Date is required" }), // HTML date input returns a string
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, { message: "Invalid start time format (HH:MM)" }),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, { message: "Invalid end time format (HH:MM)" }),
  notes: z.string().max(500, { message: "Notes cannot exceed 500 characters" }).optional(),
}).refine(data => {
    // 2. Custom validation to ensure end time is after start time
    if (!data.startTime || !data.endTime) return true; // Don't validate if times are not set
    return data.endTime > data.startTime;
}, {
    message: "End time must be after start time",
    path: ["endTime"], // Show the error on the endTime field
});

const TimeTrackerForm = () => {
  // 3. Initialize react-hook-form and connect it with Zod
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(timeEntrySchema),
    defaultValues: {
      employeeName: "",
      project: "",
      date: new Date().toISOString().split('T')[0], // Set default date to today
      startTime: "",
      endTime: "",
      notes: ""
    }
  });

  // 4. Handle form submission
  const onSubmit = (data) => {
    console.log("Form Submitted Successfully:", data);
    // In a real application, you would send this data to your backend API
    alert('Time entry submitted successfully! Check the browser console for the data.');
    reset(); // Reset the form fields after successful submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="time-tracker-form" noValidate>
      <h2>Employee Time Tracker</h2>

      <div className="form-group">
        <label htmlFor="employeeName">Employee Name</label>
        <input id="employeeName" {...register("employeeName")} />
        {errors.employeeName && <p className="error-message">{errors.employeeName.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="project">Project / Task</label>
        <input id="project" {...register("project")} />
        {errors.project && <p className="error-message">{errors.project.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input id="date" type="date" {...register("date")} />
        {errors.date && <p className="error-message">{errors.date.message}</p>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="startTime">Start Time</label>
          <input id="startTime" type="time" {...register("startTime")} />
          {errors.startTime && <p className="error-message">{errors.startTime.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="endTime">End Time</label>
          <input id="endTime" type="time" {...register("endTime")} />
          {errors.endTime && <p className="error-message">{errors.endTime.message}</p>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes (Optional)</label>
        <textarea id="notes" {...register("notes")} rows="3" />
        {errors.notes && <p className="error-message">{errors.notes.message}</p>}
      </div>

      <button type="submit">Submit Time Entry</button>
    </form>
  );
};

export default TimeTrackerForm;