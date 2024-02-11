import Link from "next/link";
import React from "react";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-96 w-full max-w-4xl flex-col items-center justify-around p-5">
        <div className="flex items-center justify-around gap-10 ">
          <div className="flex flex-col gap-7">
            <h1 className="m-0 text-9xl">404</h1>
            <h2 className="m-0 text-3xl">Page Not Found</h2>
          </div>
          <UfoSvg />
        </div>
        <div className="flex items-center justify-around gap-10 p-5">
          <Link href="/">
            {/* text-bold rounded-md border-none bg-blue-600 p-3 px-7 text-center
            font-extrabold text-white md:text-lg */}
            <button className="text-bold whitespace-nowrap rounded-full border-none bg-blue-600 p-2 px-4 text-lg text-white shadow hover:scale-105 hover:bg-blue-700">
              Go Home
            </button>
          </Link>
          <Link href="/portfolio">
            <button className="text-bold whitespace-nowrap rounded-full border-none bg-slate-200 p-2 px-4 text-lg hover:scale-105 hover:bg-slate-300">
              Checkout Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const UfoSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width="672.5315"
      height="738.39398"
      viewBox="0 0 672.5315 738.39398"
      className="h-52 w-52 rotate-3"
    >
      <path
        d="M730.73425,230.607c-46.62012-7.44-99.71-11.41-155-11.41-50.6001,0-99.3501,3.32-142.98,9.58.01026-.67005.02-1.34.04981-2.01a148.99943,148.99943,0,0,1,297.91015,1.82C730.72449,229.267,730.73425,229.937,730.73425,230.607Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#3f63ed"
      />
      <g opacity="0.1">
        <path
          d="M601.28454,82.14432A149.04745,149.04745,0,0,0,432.35339,225.373c-.03027.67-.04,1.34-.0498,2.01,12.96191-1.85981,26.38476-3.4535,40.165-4.78431A149.02172,149.02172,0,0,1,601.28454,82.14432Z"
          transform="translate(-263.73425 -80.80301)"
          fill="#fff"
        />
      </g>
      <path
        d="M795.91443,242.427a600.121,600.121,0,0,0-65.2002-13.84,943.3639,943.3639,0,0,0-108.73974-10.45c-15.17041-.62-30.62012-.94-46.24024-.94-12.37988,0-24.66015.2-36.77.6a973.28988,973.28988,0,0,0-106.16015,8.97,624.29224,624.29224,0,0,0-77.25,15.66c-59.21,16.37-91.81983,38.31-91.81983,61.77s32.60987,45.4,91.81983,61.77c41.64013,11.52,92.98,19.37,148.92041,22.97,23.08984,1.5,46.96,2.26,71.25976,2.26,24.37988,0,48.33008-.77,71.49024-2.27,50.90966-3.29,98.00976-10.1,137.42968-20,.21-.06.41016-.11.62012-.16,2.66016-.66,5.27979-1.35,7.87012-2.04.92969-.26,1.84961-.51,2.77-.76a.97843.97843,0,0,1,.15967-.05c.88037-.24,1.75-.49,2.62011-.73,1.74024-.5,3.46-.99,5.14991-1.5.08007-.02.1499-.04.22021-.06,1.46973-.44,2.91016-.88,4.33984-1.32,1.16993-.37,2.33008-.73,3.48-1.1q1.26051-.405,2.49024-.81c.6001-.2,1.18994-.39,1.77-.59.79-.26,1.58008-.53,2.35986-.8.33008-.11.66016-.22.98-.34.75-.25,1.48-.51,2.21-.77.79-.28,1.58008-.57,2.35987-.85.65039-.23,1.30029-.47,1.93994-.71.54-.21,1.07031-.41,1.61035-.61,1.46973-.55,2.91016-1.12006,4.33008-1.68.71-.29,1.41992-.57,2.11963-.86.68994-.28,1.39013-.57,2.07031-.86q1.67944-.70506,3.2998-1.41c.52-.24,1.0503-.47,1.56006-.68994.39014-.18.77-.35,1.16016-.53.27978-.12.56006-.25.83008-.38,1.00976-.46,2.00976-.93,2.98974-1.4q5.64039-2.7,10.52979-5.52c20.45019-11.71,31.24023-24.7,31.24023-38.2C887.73425,280.737,855.12439,258.797,795.91443,242.427Zm-.54,121.62c-41.68994,11.53-93.16992,19.38-149.26026,22.95-22.81005,1.45-46.38964,2.2-70.37988,2.2-23.91015,0-47.41015-.74-70.1499-2.19-56.18018-3.56-107.74023-11.41-149.49023-22.96-58.27-16.12-90.35987-37.37-90.35987-59.85a24.11774,24.11774,0,0,1,.74024-5.89c5.09961-20.28,36.46972-39.26,89.61963-53.96a623.80606,623.80606,0,0,1,76.66015-15.57,976.02713,976.02713,0,0,1,106.79981-9q17.88061-.585,36.18017-.58c15.41016,0,30.6499.31,45.62988.91a941.36713,941.36713,0,0,1,109.37012,10.5A598.85754,598.85754,0,0,1,795.37439,244.347c53.14014,14.7,84.5,33.67,89.60986,53.94a23.82213,23.82213,0,0,1,.75,5.91C885.73425,326.677,853.64441,347.927,795.37439,364.047Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#3f3d56"
      />
      <path
        d="M887.16443,305.107c0,13.36005-11.01026,26-30.67041,37.29-3.26953,1.88-6.78955,3.72-10.52979,5.52-.98.47-1.98.94-2.98974,1.4-.27.13-.5503.26-.83008.38-.39014.18-.77.35-1.16016.53-.50976.22-1.04.45-1.56006.68994q-1.6201.705-3.2998,1.41c-.68018.29-1.38037.58-2.07031.86-.69971.29-1.40967.57-2.11963.86-1.41992.56-2.86035,1.13-4.33008,1.68-.54.2-1.07031.4-1.61035.61-.63965.24-1.28955.48-1.93994.71-.77979.28-1.56983.57-2.35987.85-.73.26-1.46.52-2.21.77-.31982.12006-.6499.23-.98.34-.77978.27-1.56982.54-2.35986.8-.58008.2-1.16992.39-1.77.59q-1.23046.40494-2.49024.81c-1.1499.37-2.31.73-3.48,1.1-1.42968.44-2.87011.88-4.33984,1.32-.07031.02-.14014.04-.22021.06-1.68995.51-3.40967,1-5.14991,1.5-.87011.24-1.73974.49-2.62011.73a.97843.97843,0,0,0-.15967.05c-.92041.25-1.84033.5-2.77.76-2.58008.68-5.21,1.37-7.87012,2.04-.21.05-.41016.1-.62012.16-38.35009,9.58-85.3999,16.56-137.46972,19.93-22.81006,1.47-46.59033,2.25-71.02,2.25-24.6499,0-48.63037-.79-71.62012-2.29-137.24023-8.95-239.37988-43.03-239.37988-83.71a25.07169,25.07169,0,0,1,1.11963-7.3c.06006.17.12011.33.19043.5,14.26953,37.48,115.54,67.77,246.93994,75.16,20.12988,1.13995,40.98,1.73,62.31982,1.73,21.43018,0,42.35987-.6,62.56983-1.74,131.29-7.42,232.46045-37.72,246.68017-75.17q.36036-.90006.62988-1.8A25.30451,25.30451,0,0,1,887.16443,305.107Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#3f3d56"
      />
      <path
        d="M355.40356,294.343c-16.6427,0-34.33068-3.58057-34.33068-10.2168s17.688-10.2168,34.33068-10.2168,34.33069,3.58057,34.33069,10.2168S372.04626,294.343,355.40356,294.343Zm0-18.4336c-19.053,0-32.33068,4.33057-32.33068,8.2168s13.2777,8.2168,32.33068,8.2168,32.33069-4.33057,32.33069-8.2168S374.45654,275.90939,355.40356,275.90939Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#3f3d56"
      />
      <path
        d="M426.40344,341.343c-16.64258,0-34.33056-3.58057-34.33056-10.2168s17.688-10.2168,34.33056-10.2168c16.64282,0,34.33081,3.58057,34.33081,10.2168S443.04626,341.343,426.40344,341.343Zm0-18.4336c-19.05286,0-32.33056,4.33057-32.33056,8.2168s13.2777,8.2168,32.33056,8.2168,32.33081-4.33057,32.33081-8.2168S445.45642,322.90939,426.40344,322.90939Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#3f3d56"
      />
      <path
        d="M795.40344,294.343c-16.64258,0-34.33056-3.58057-34.33056-10.2168s17.688-10.2168,34.33056-10.2168c16.64282,0,34.33081,3.58057,34.33081,10.2168S812.04626,294.343,795.40344,294.343Zm0-18.4336c-19.053,0-32.33056,4.33057-32.33056,8.2168s13.27758,8.2168,32.33056,8.2168,32.33081-4.33057,32.33081-8.2168S814.45642,275.90939,795.40344,275.90939Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#3f3d56"
      />
      <path
        d="M724.40344,341.343c-16.64258,0-34.33056-3.58057-34.33056-10.2168s17.688-10.2168,34.33056-10.2168c16.64282,0,34.33081,3.58057,34.33081,10.2168S741.04626,341.343,724.40344,341.343Zm0-18.4336c-19.053,0-32.33056,4.33057-32.33056,8.2168s13.27758,8.2168,32.33056,8.2168,32.33081-4.33057,32.33081-8.2168S743.45642,322.90939,724.40344,322.90939Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#3f3d56"
      />
      <path
        d="M575.40344,363.343c-16.64258,0-34.33056-3.58057-34.33056-10.2168s17.688-10.2168,34.33056-10.2168c16.64282,0,34.33081,3.58057,34.33081,10.2168S592.04626,363.343,575.40344,363.343Zm0-18.4336c-19.053,0-32.33056,4.33057-32.33056,8.2168s13.27758,8.2168,32.33056,8.2168,32.33081-4.33057,32.33081-8.2168S594.45642,344.90939,575.40344,344.90939Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#3f3d56"
      />
      <circle cx="336.97785" cy="450.70425" r="42.01233" fill="#2f2e41" />
      <rect
        x="565.93651"
        y="563.55388"
        width="22.86756"
        height="12.76328"
        transform="translate(-457.82019 238.05835) rotate(-26.60099)"
        fill="#2f2e41"
      />
      <ellipse
        cx="563.82041"
        cy="573.74843"
        rx="3.98853"
        ry="10.63605"
        transform="translate(-489.27546 647.82906) rotate(-56.60122)"
        fill="#2f2e41"
      />
      <rect
        x="617.67227"
        y="558.50174"
        width="12.76328"
        height="22.86756"
        transform="translate(-428.72163 791.92555) rotate(-63.39901)"
        fill="#2f2e41"
      />
      <ellipse
        cx="637.60379"
        cy="573.74843"
        rx="10.63605"
        ry="3.98853"
        transform="translate(-474.26735 364.92328) rotate(-33.39878)"
        fill="#2f2e41"
      />
      <circle cx="334.03663" cy="440.42779" r="14.35864" fill="#fff" />
      <ellipse
        cx="597.86951"
        cy="515.08401"
        rx="4.76624"
        ry="4.8"
        transform="translate(-452.84172 492.81919) rotate(-45)"
        fill="#3f3d56"
      />
      <path
        d="M633.854,485.80233c.63177-15.55359-12.77314-28.7276-29.9408-29.42493s-31.59692,11.346-32.22873,26.8996,11.30191,19.08746,28.46958,19.78485S633.22214,501.35592,633.854,485.80233Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#3f63ed"
      />
      <ellipse
        cx="644.38811"
        cy="537.56776"
        rx="6.59448"
        ry="21.00616"
        transform="translate(-458.4377 468.61755) rotate(-40.64516)"
        fill="#2f2e41"
      />
      <ellipse
        cx="557.15365"
        cy="537.56776"
        rx="21.00616"
        ry="6.59448"
        transform="translate(-477.37906 529.35274) rotate(-49.35484)"
        fill="#2f2e41"
      />
      <path
        d="M612.25083,548.0638a9.57244,9.57244,0,0,1-18.83533,3.42884l-.00336-.0185c-.94177-5.20214,3.08039-7.043,8.28254-7.98474S611.30912,542.86166,612.25083,548.0638Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#fff"
      />
      <path
        d="M529.73425,576.197a2.0001,2.0001,0,0,1-2-2v-118a2,2,0,0,1,4,0v118A2.0001,2.0001,0,0,1,529.73425,576.197Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#ccc"
      />
      <path
        d="M499.73425,682.197a2.0001,2.0001,0,0,1-2-2v-86a2,2,0,1,1,4,0v86A2.0001,2.0001,0,0,1,499.73425,682.197Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#ccc"
      />
      <path
        d="M576.73425,611.197a2.0001,2.0001,0,0,1-2-2v-118a2,2,0,1,1,4,0v118A2.0001,2.0001,0,0,1,576.73425,611.197Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#ccc"
      />
      <path
        d="M547.73425,696.197a2.0001,2.0001,0,0,1-2-2v-48a2,2,0,1,1,4,0v48A2.0001,2.0001,0,0,1,547.73425,696.197Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#ccc"
      />
      <path
        d="M588.73425,450.197a2.0001,2.0001,0,0,1-2-2v-48a2,2,0,0,1,4,0v48A2.0001,2.0001,0,0,1,588.73425,450.197Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#ccc"
      />
      <path
        d="M488.73425,471.197a2.0001,2.0001,0,0,1-2-2v-48a2,2,0,0,1,4,0v48A2.0001,2.0001,0,0,1,488.73425,471.197Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#ccc"
      />
      <path
        d="M662.73425,476.197a2.0001,2.0001,0,0,1-2-2v-48a2,2,0,1,1,4,0v48A2.0001,2.0001,0,0,1,662.73425,476.197Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#ccc"
      />
      <path
        d="M658.73425,626.197a2.0001,2.0001,0,0,1-2-2v-58a2,2,0,1,1,4,0v58A2.0001,2.0001,0,0,1,658.73425,626.197Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#ccc"
      />
      <path
        d="M618.73425,677.197a2.0001,2.0001,0,0,1-2-2v-86a2,2,0,1,1,4,0v86A2.0001,2.0001,0,0,1,618.73425,677.197Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#ccc"
      />
      <path
        d="M626.73425,530.197a2.0001,2.0001,0,0,1-2-2v-118a2,2,0,1,1,4,0v118A2.0001,2.0001,0,0,1,626.73425,530.197Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#ccc"
      />
      <ellipse
        cx="858.10361"
        cy="764.78333"
        rx="6.76007"
        ry="21.53369"
        transform="translate(-554.53185 648.46489) rotate(-39.93837)"
        fill="#2f2e41"
      />
      <circle
        cx="812.2965"
        cy="757.30544"
        r="43.06733"
        transform="translate(-426.75153 1207.63346) rotate(-71.56505)"
        fill="#2f2e41"
      />
      <rect
        x="553.7073"
        y="710.30199"
        width="13.08374"
        height="23.44171"
        fill="#2f2e41"
      />
      <rect
        x="527.53982"
        y="710.30199"
        width="13.08374"
        height="23.44171"
        fill="#2f2e41"
      />
      <ellipse
        cx="555.8879"
        cy="734.01629"
        rx="10.90314"
        ry="4.08868"
        fill="#2f2e41"
      />
      <ellipse
        cx="529.72042"
        cy="733.47115"
        rx="10.90314"
        ry="4.08868"
        fill="#2f2e41"
      />
      <path
        d="M798.77365,703.16853c3.84557-15.487,20.82057-24.60076,37.91471-20.35617s27.83428,20.24028,23.98871,35.72729-16.60394,15.537-33.69809,11.29233S794.92806,718.65557,798.77365,703.16853Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#ccc"
      />
      <ellipse
        cx="763.7883"
        cy="737.32189"
        rx="6.76007"
        ry="21.53369"
        transform="translate(-493.44249 1030.65892) rotate(-64.62574)"
        fill="#2f2e41"
      />
      <circle cx="542.12366" cy="667.41487" r="14.35864" fill="#fff" />
      <circle cx="536.22229" cy="662.26808" r="4.78622" fill="#3f3d56" />
      <circle cx="542" cy="697.39398" r="6" fill="#fff" />
      <path
        d="M935.26575,819.197h-236a1,1,0,0,1,0-2h236a1,1,0,0,1,0,2Z"
        transform="translate(-263.73425 -80.80301)"
        fill="#3f3d56"
      />
    </svg>
  );
};
export default PageNotFound;
