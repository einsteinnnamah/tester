import Image from "next/legacy/image";
import { Inter } from "next/font/google";
import trump from "../../public/trump.webp";
import a from "../../public/a.svg";
import s from "../../public/s.png";
import Payments from "@/components/Payments";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full max-w-[900px] mx-auto ">
      <nav className="w-full flex items-center justify-start pb-10 pt-5 px-4 border-b-2 border-[#e60000] ">
        <div className="w-[250px] h-[80px] relative">
          <Image src={trump} layout="fill" objectFit="cover" alt="/" />
        </div>
      </nav>
      <section className="grid lg:grid-cols-2 grid-cols-1 w-full px-4 py-10 gap-8">
        <div className="text-[#002966]  w-full">
          <h2 className="text-xl font-bold w-full">
            Let me be as clear as possible:
          </h2>
          <h1 className="text-[#002966] text-2xl font-bold w-full">
            I WILL NEVER STOP FIGHTING FOR YOU
          </h1>
          <div className=" w-full">
            <p className="w-full text-[#444444] my-4 text-base">
              With your support at this moment in history, WE WILL WIN BACK THE
              WHITE HOUSE AND MAKE AMERICA GREAT AGAIN!
            </p>
            <p className="w-full text-[#444444] my-4 text-base">
              If you can, and only if you can - Please make a contribution to
              defend our MAGA movement!
            </p>
          </div>
          <p className="w-full text-[#e60000] mt-4 font-bold">
            I&apos;m calling on pro-Trump patriots to chip in and say:
          </p>
          <h1 className="w-full text-[#e60000] text-2xl font-bold mt-4">
            I STAND WITH TRUMP!
          </h1>
          <div className="w-[250px] h-[100px] mx-auto relative mt-8">
            <Image
              src={s}
              alt="Donald Trump's signature"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="w-full text-center text-[#444444] text-xs p-8">
            Donald J. Trump, 45th President of the United States
          </p>
        </div>
        <div className="w-full">
          <Payments />
        </div>
      </section>
      <footer className="w-full text-center p-4 text-base text-[#000000]">
        <p>
          By providing your phone number, you are consenting to receive calls
          and recurring SMS/MMS messages, including autodialed and automated
          calls and texts, to that number from each of the participating
          committees in Trump National Committee JFC, Inc. (“TNC”), a joint
          fundraising committee composed of and authorized by Donald J. Trump
          for President 2024, Inc. (“DJTFP”), the principal campaign committee
          of Donald J. Trump, and the Republican National Committee (“RNC”). Msg
          & data rates may apply. Terms & conditions/privacy policy apply.
          <span className="text-[#e60000] font-bold"> txtterms.co/88022-2</span>
        </p>
        <p>
          Contributions to TNC or any of its participating committee are not tax
          deductible and will be used in connection with federal elections.
        </p>
        <p>
          Contributions to TNC are subject to federal contribution limits and
          source prohibitions. Contributions from corporations, foreign
          nationals (i.e., without “green cards”), federal government
          contractors, and other federally impermissible sources are prohibited.
          Contributions made in the name of, or refunded by, any other person
          are prohibited by law.
        </p>
        <p>
          Contributions to TNC from individuals (multicandidate PACs) will be
          allocated according to the following formula: 1. 90% to DJTFP, which
          will designate the funds first to its primary election account, then
          to its general election account, and finally to its recount account,
          up to a maximum of $3,300 ($5,000) per election; and 2. 10% to the
          RNC, up to a maximum of $413,000 ($150,000) per year.
        </p>
        <p>
          Any contribution exceeding the legal amount that may be contributed to
          any committee will be distributed to the remaining participating
          committee to the extent permitted by federal law and according to the
          allocation method set forth above. Any contribution that would cause a
          contributor to exceed any applicable federal contribution limit or
          otherwise not be permissible under FECA and FEC regulations will be
          refunded to the contributor. Contributors may specify a different
          allocation than the one set forth above.
        </p>
        <p>
          Federal law requires us to use our best efforts to collect and report
          the name, mailing address, occupation, and name of employer of each
          individual whose aggregate contributions exceed $200 in an election
          cycle or calendar year, as applicable.
        </p>
        <p className="w-full p-3 border border-black my-4">
          Paid for by Trump National Committee JFC Inc., a joint fundraising
          committee composed of and authorized by Donald J. Trump for President
          2024, Inc. and the Republican National Committee
        </p>
        <p className="w-full text-sm text-center text-[#444444] my-4">
          &copy; 2024 Trump National Committee JFC, Inc. and Anedot Inc. All
          rights reserved.
        </p>
        <p className="w-full text-center text-sm ">
          Have questions? Visit
          <span className="text-[#1662f5]">DonorSupport.com</span>
        </p>
        <div className="relative w-[150px] h-8 mx-auto my-1">
          <Image src={a} alt="/" layout="fill" objectFit="cover" />
        </div>
      </footer>
    </main>
  );
}
