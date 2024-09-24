import Greetings from '@/components/admin/Greetings';
import CloudIcon from '@/components/icons/cloudIcon';
import { eventTypes } from '@/CONSTANTS';

export default function CreateEvent() {
  return (
    <section className="px-4 py-4 font-open-sans md:px-8">
      <Greetings />
      <article className="mt-4">
        <h3 className="font-semibold">Create an Event</h3>
        <form className="mt-4 flex flex-col gap-8 md:flex-row">
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
              <select name="eventType" className="event_input outline-none">
                <option value="" selected>
                  Select Event Type
                </option>
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
          <div className="mt-14 flex w-full flex-col gap-4 md:w-1/2">
            {/* start */}
            <div className="flex justify-between gap-4">
              <div className="flex w-1/2 flex-col gap-1">
                <label className="text-sm">
                  Event start date <span className="text-red-secondary">*</span>
                </label>
                <input
                  type="date"
                  name="start_date"
                  className="event_input"
                  required
                />
              </div>
              <div className="flex w-1/2 flex-col gap-1">
                <label className="text-sm">
                  Event start Time <span className="text-red-secondary">*</span>
                </label>
                <input
                  type="time"
                  name="start_time"
                  className="event_input"
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
                <input
                  type="date"
                  name="end_date"
                  className="event_input"
                  required
                />
              </div>
              <div className="flex w-1/2 flex-col gap-1">
                <label className="text-sm">
                  Event end Time <span className="text-red-secondary">*</span>
                </label>
                <input
                  type="time"
                  name="end_time"
                  className="event_input"
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
                name="image"
              />
              <div className="dashed-border flex w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-md md:h-[120px]">
                <CloudIcon />
                <p className="text-sm text-red-secondary">Click to Upload</p>
                <p className="text-sm text-gray">Max. File Size: 15MB</p>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <button
                type="button"
                className="w-[140px] rounded-md border border-black py-1.5 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[140px] rounded-md bg-red-secondary py-1.5 font-semibold text-white"
              >
                Create Event
              </button>
            </div>
          </div>
        </form>
      </article>
    </section>
  );
}
