import React from "react";
import headshot from '../assets/headshot.jpg';

// About page content migrated from Next.js AboutClient
const About: React.FC = () => {
  return (
    <section id="about" className="bg-muted/20 py-12 md:py-12">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          {/* Profile section with photo at the top */}
          <div className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full max-w-xs md:w-1/3">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                {/* TODO: Replace with actual image import and use */}
                <img
                  src={headshot}
                  alt="Daniel E. Williams"
                  className="object-cover w-full h-full"
                  loading="eager"
                  style={{ aspectRatio: 1 }}
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-4">
                About D. E. Williams & Company
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Founded by Daniel E. Williams, we provide strategic technology advisory services to education and workforce development organizations.
              </p>
              <a 
                href="/bio" 
                className="inline-flex items-center text-primary hover:underline transition-all duration-200"
              >
                Read Daniel's full bio →
              </a>
            </div>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                Why We're Built Different
              </h2>
              <div className="mt-6 space-y-6 text-lg text-muted-foreground">
                <p>
                  D. E. Williams and Company thrives where others fail, tackling high-risk problems that haunt
                  executives. Founded by Daniel E. Williams, a Pariveda Solutions senior principal who transformed
                  Toyota, the Federal Reserve, and JFFLabs, we deliver 99.999% uptime and 20%+ ROI with surgical
                  precision. Our blend of technical genius and trusted partnerships turns your toughest challenges into
                  triumphs.
                </p>
                <p>
                  Our alliance with IncioX, led by a former chief of staff for a $3B firm, brings unmatched operational
                  firepower to execute at scale. We combine bold tech, deep connections, and ironclad strategy to make
                  you a market leader.
                </p>
                <div className="rounded-lg bg-card p-4 border border-border hover:border-muted-foreground/50 transition-colors duration-200">
                  <p className="text-base">
                    "D. E. Williams advised on our digital transformation audit, delivering over 20% in cost savings and
                    ROI." – Regional GM
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                Our Vision
              </h2>
              <div className="mt-6 space-y-6 text-lg text-muted-foreground">
                <p>
                  We're building a strategic juggernaut that crushes today's toughest problems and shapes tomorrow's
                  game-changing businesses. Our mission is to arm executives to conquer the impossible and rewrite their legacy.
                </p>
                <p>
                  By 2027, we aim to:
                </p>
                <ul className="space-y-2 list-disc pl-6">
                  <li>Scale to $1M in annual revenue through high-impact strategic partnerships</li>
                  <li>Launch a micro family office to invest in education and workforce innovation</li>
                  <li>Build a team of elite consultants who share our mission</li>
                  <li>Create transformative fellowship programs that reach thousands</li>
                </ul>
                <div className="rounded-lg bg-card p-4 border border-border hover:border-muted-foreground/50 transition-colors duration-200">
                  <p className="text-base font-medium">
                    Ready to transform your organization? 
                    <a href="/contact" className="text-primary hover:underline ml-2 transition-colors duration-200">
                      Schedule a consultation →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
