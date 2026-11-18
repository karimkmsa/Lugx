import { CloudIcon, LayoutIcon, ReplyIcon, UserIcon } from "../Layout/Icons";

const features = [
  { title: "Free Storage", icon: CloudIcon },
  { title: "User More", icon: UserIcon },
  { title: "Reply Ready", icon: ReplyIcon },
  { title: "Easy Layout", icon: LayoutIcon },
];

function Features() {
  return (
    <section className="relative z-20 -mt-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
  
          const Icon = feature.icon;

          return (
            <a
              key={feature.title}
              href="#trending"
              className="rounded-3xl bg-white px-6 py-10 text-center shadow-xl transition hover:-translate-y-1"
            >
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand text-white">
                <Icon />
              </span>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide">{feature.title}</h3>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
