const logos = [
  { name: "amazon", text: "amazon" },
  { name: "dribbble", text: "dribbble" },
  { name: "HubSpot", text: "HubSpot" },
  { name: "Notion", text: "Notion" },
  { name: "Netflix", text: "NETFLIX" },
  { name: "Zoom", text: "zoom" },
];

const LogoBar = () => {
  return (
    <section className="py-8 lg:py-12 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-xl lg:text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer grayscale hover:grayscale-0"
            >
              {logo.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
