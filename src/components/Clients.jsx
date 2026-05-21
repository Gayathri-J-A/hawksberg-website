const clients = ["Apptivo", "Avon Logistics", "Marriott", "1Sid Asia", "E-Prominent", "Northstar", "Innovex", "Cygnus", "Minuscule Technologies","EPC","GreenMile","Profit.co","Shakara Plating","JMI","GigHZ","Logic Valley","asia E&O","Janatics Pnematic","Accumed","Salzer Technologies","Courtyard","Wentin Hotels & Resorts","Aloft Hotels","Steam A","Resolute Groups"];

export default function Clients() {
  return (
    <section className="border-y border-border bg-secondary/40 py-14">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by leading organisations across the globe
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {clients.map((c) => (
            <div
              key={c}
              // className="grid h-16 place-items-center rounded-md border border-border bg-card font-display text-lg text-muted-foreground transition-colors hover:text-gold"
              className="flex min-h-[80px] items-center justify-center rounded-md border border-border bg-card px-2 text-center font-display text-lg leading-snug text-muted-foreground transition-colors hover:text-gold"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
