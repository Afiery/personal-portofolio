import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { GithubLogo } from "./icons";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          {/* <ProfileImage className="hidden md:block" /> */}

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mt-8 mb-4">
              About Me
            </Badge>
            {/* <ProfileImage className="mt-3 mb-8 block md:hidden" /> */}
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Fikri Putra Pratama
            </h2>
            <p className="text-muted-foreground mb-4 text-justify">
              Hello ! My name is Fikri Putra Pratama and people often call me Fikri. I&apos;m a web developer that mainly use Laravel as my Framework.
              I&apos;m also passionate about exploring new technologies and keeping up with the latest design trends, especially GFX editing.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full">
                <GithubLogo />
                View Github
              </Button>
              <Button variant="outline" className="rounded-full">
              <a href="/pdf/Fikri Putra Pratama - CV.pdf" download className="flex items-center gap-2">
                <Download />
                Download CV
              </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
