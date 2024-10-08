'use client';

import { createEventAction } from '@/actions/adminActions';
import { eventTypes } from '@/CONSTANTS';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import CloudIcon from '../icons/cloudIcon';
import { Input } from '../ui/input';

export default function CreateEventForm() {
  const [imageValue, setImageValue] = useState('');
  const [state, formAction] = useFormState(createEventAction, { message: '' });

  const router = useRouter();

  function clickImage() {
    const imageRef = document.getElementById('imageRef');
    imageRef?.click();
  }

  return (
    <article className="mt-16 px-4 py-4 md:mt-0 md:px-8">
      <h3 className="font-semibold">Create an Event</h3>
      <form
        className="mt-4 flex flex-col gap-x-8 md:flex-row"
        action={formAction}
      >
        <div className="w-full md:w-1/2">
          <h4 className="mb-6 w-full border-b border-red-secondary pb-1">
            Event Details
          </h4>

          <div className="flex flex-col gap-2">
            <label className="text-sm">
              Event Title <span className="text-red-secondary">*</span>
            </label>
            <input
              type="text"
              name="eventTitle"
              className="event_input"
              required
            />
            <p className="text-sm text-gray">
              This is the name of the event that customers will see
            </p>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <label className="text-sm">Event Type</label>
            <select
              defaultValue="Select Event Type"
              name="eventType"
              className="event_input outline-none"
            >
              <option value="">Select Event Type</option>
              {eventTypes.map((event, index) => (
                <option key={index} value={event}>
                  {event}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <label className="text-sm">Description</label>
            <input type="text" name="description" className="event_input" />
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <label className="text-sm">
              Location<span className="text-red-secondary">*</span>
            </label>
            <input
              type="text"
              name="location"
              className="event_input"
              required
            />
          </div>
        </div>

        {/* date and image */}
        <div className="mt-4 flex w-full flex-col gap-4 md:mt-14 md:w-1/2">
          {/* start */}
          <div className="flex justify-between gap-4">
            <div className="flex w-1/2 flex-col gap-1">
              <label className="text-sm">
                Event start date <span className="text-red-secondary">*</span>
              </label>
              <Input
                type="date"
                name="start_date"
                className="event_input md:hidden"
                required
              />
              <input
                type="date"
                name="start_date"
                className="event_input hidden md:block"
                required
              />
            </div>
            <div className="flex w-1/2 flex-col gap-1">
              <label className="text-sm">
                Event start Time <span className="text-red-secondary">*</span>
              </label>
              <Input
                type="time"
                name="start_time"
                className="event_input w-full md:hidden"
                required
              />
              <input
                type="time"
                name="start_time"
                className="event_input hidden md:block"
                required
              />
            </div>
          </div>

          {/* end */}
          <div className="flex justify-between gap-4">
            <div className="flex w-1/2 flex-col gap-1">
              <label className="text-sm">
                Event end date <span className="text-red-secondary">*</span>
              </label>
              <Input
                type="date"
                name="end_date"
                className="event_input md:hidden"
                required
              />
              <input
                type="date"
                name="end_date"
                className="event_input hidden md:block"
                required
              />
            </div>
            <div className="flex w-1/2 flex-col gap-1">
              <label className="text-sm">
                Event end Time <span className="text-red-secondary">*</span>
              </label>

              <Input
                type="time"
                name="end_time"
                className="event_input md:hidden"
                required
              />
              <input
                type="time"
                name="end_time"
                className="event_input hidden md:block"
                required
              />
            </div>
          </div>
          {/* image */}
          <div className="space-y-4">
            <label className="text-sm">Upload Event Photos/Flyer</label>
            <input
              type="file"
              className="hidden w-full"
              required
              accept="image/jpg, image/jpeg, image/.png"
              name="image"
              id="imageRef"
              value={imageValue}
              onChange={(e) => setImageValue(e.target.value)}
            />
            <div
              className="dashed-border flex w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-md md:h-[120px]"
              onClick={clickImage}
            >
              <CloudIcon />
              <p className="text-sm text-red-secondary">Click to Upload</p>
              <p className="text-sm text-gray">Max. File Size: 15MB</p>
            </div>
            {!imageValue && (
              <p className="text-sm text-red-secondary">no file selected</p>
            )}
            {imageValue && (
              <p className="text-sm">
                {imageValue.split('\\').pop()}{' '}
                <button
                  type="button"
                  className="ml-2 rounded-md bg-red-secondary px-2 py-1 text-white"
                  onClick={() => setImageValue('')}
                >
                  clear
                </button>
              </p>
            )}
          </div>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => router.back()}
              type="button"
              className="w-[140px] rounded-md border border-black py-1.5 font-semibold"
            >
              Cancel
            </button>
            <Button />
          </div>
        </div>
      </form>
    </article>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-[140px] rounded-md bg-red-secondary py-1.5 font-semibold text-white"
    >
      {pending ? 'Creating Event' : 'Create Event'}
    </button>
  );
}
