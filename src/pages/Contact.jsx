import PageBanner from "../components/Layout/PageBanner";

const contacts = [
  { label: "Address", value: "Sunny Isles Beach, FL 33160, United States" },
  { label: "Phone", value: "+123 456 7890" },
  { label: "Email", value: "lugx@contact.com" },
];

function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" crumbs={[{ label: "Contact Us" }]} />
      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-20 lg:grid-cols-2">
        <div className="rounded-4xl bg-soft px-8 py-12 md:px-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-coral">Contact Us</p>
          <h2 className="mt-3 text-4xl font-bold">Say Hello!</h2>
          <p className="mt-6 text-sm leading-7 text-muted">
            Have a question about a game or an order? Send us a message and we will get back to you soon.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            {contacts.map((item) => (
              <div key={item.label}>
                <dt className="font-bold">{item.label}</dt>
                <dd className="mt-1 text-muted">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="pt-2">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              title="Sunny Isles Beach map"
              src="https://maps.google.com/maps?q=Sunny%20Isles%20Beach%20FL&z=12&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input placeholder="Your Name..." className="rounded-full bg-soft px-5 py-3 text-sm outline-none" />
            <input placeholder="Your Surname..." className="rounded-full bg-soft px-5 py-3 text-sm outline-none" />
            <input type="email" placeholder="Your E-mail..." className="rounded-full bg-soft px-5 py-3 text-sm outline-none" />
            <input placeholder="Subject..." className="rounded-full bg-soft px-5 py-3 text-sm outline-none" />
          </div>
          <textarea
            placeholder="Your Message"
            rows="6"
            className="mt-4 w-full resize-none rounded-3xl bg-soft px-5 py-4 text-sm outline-none"
          />
          <button type="button" className="btn-coral mx-auto mt-6 block px-8 text-sm tracking-wide">
            SEND MESSAGE NOW
          </button>
        </div>
      </section>
    </>
  );
}

export default Contact;
