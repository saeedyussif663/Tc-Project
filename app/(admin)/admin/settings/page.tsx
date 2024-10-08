export default function page() {
  return (
    <section className="mt-16 px-4 py-4 md:mt-0 md:px-8">
      <h3 className="font-sans-jarkata text-lg font-semibold">
        General settings
      </h3>
      <div className="mt-4 w-full font-sans md:w-1/2">
        <h5 className="mb-4 w-full border-b-[0.5px] border-red-secondary pb-1">
          Store Details
        </h5>
        <form className="space-y-4">
          <div className="flex flex-col gap-1">
            <label>Event name</label>
            <input
              type="text"
              name="event_name"
              placeholder="MyTicket"
              className="h-[35px] rounded-md bg-[#F2F2F2] px-4 text-sm text-black"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Event url</label>
            <input
              type="text"
              name="event_url"
              placeholder="MyTicket"
              className="h-[35px] rounded-md bg-[#F2F2F2] px-4 text-sm text-black"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Company Name</label>
            <input
              type="text"
              name="company_name"
              placeholder="MyTicket"
              className="h-[35px] rounded-md bg-[#F2F2F2] px-4 text-sm text-black"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Business Country</label>
            <input
              type="text"
              name="business_country"
              placeholder="MyTicket"
              className="h-[35px] rounded-md bg-[#F2F2F2] px-4 text-sm text-black"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
