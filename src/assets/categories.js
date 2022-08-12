export const Categories = [
  {
    title: "Ακαδημαικό Προσωπικό",
    iconSVG: (
      <svg
        className="fill-svg"
        width="100%"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.6718 0C4.64536 0 2.19194 2.4394 2.19194 5.44855C2.19194 8.45769 4.64536 10.8971 7.6718 10.8971C10.6982 10.8971 13.1517 8.45769 13.1517 5.44855C13.1517 2.4394 10.6982 0 7.6718 0ZM4.38389 5.44855C4.38389 3.64306 5.85594 2.17942 7.6718 2.17942C9.48767 2.17942 10.9597 3.64306 10.9597 5.44855C10.9597 7.25403 9.48767 8.71767 7.6718 8.71767C5.85594 8.71767 4.38389 7.25403 4.38389 5.44855Z"
          fill="#F3F3F3"
        />
        <path
          d="M16.3392 5.68641C16.0309 5.5301 15.6897 5.44861 15.3436 5.44861V3.26919C16.0358 3.26919 16.7182 3.43211 17.3349 3.74473C17.4028 3.77916 17.4697 3.8153 17.5355 3.8531C18.0675 4.15848 18.5298 4.57208 18.8916 5.06775C19.2982 5.62477 19.5663 6.26961 19.6741 6.94947C19.7818 7.62934 19.7261 8.32491 19.5115 8.97926C19.2969 9.63361 18.9295 10.2281 18.4394 10.7142C17.9493 11.2002 17.3504 11.5639 16.6917 11.7756C16.1056 11.9639 15.487 12.0271 14.8762 11.962C14.8006 11.9539 14.7252 11.9439 14.6499 11.9319C13.9668 11.823 13.3194 11.555 12.7605 11.1498L12.7594 11.149L14.0515 9.38846C14.3311 9.59131 14.655 9.7254 14.9967 9.77986C15.3385 9.83431 15.6883 9.80753 16.0177 9.70171C16.347 9.59588 16.6464 9.41402 16.8915 9.17102C17.1365 8.92801 17.3202 8.63076 17.4275 8.30359C17.5348 7.97643 17.5626 7.62865 17.5088 7.28873C17.4549 6.94881 17.3208 6.6264 17.1175 6.3479C16.9143 6.06939 16.6475 5.84271 16.3392 5.68641Z"
          fill="#F3F3F3"
        />
        <path
          d="M19.7254 19.6148C19.7254 19.0426 19.6121 18.4761 19.3919 17.9475C19.1717 17.4189 18.8489 16.9386 18.442 16.5341C18.0351 16.1295 17.5521 15.8086 17.0205 15.5896C16.4888 15.3707 15.919 15.258 15.3436 15.258V13.0765C16.0911 13.0765 16.8323 13.2032 17.5355 13.4504C17.6447 13.4888 17.7529 13.5301 17.8601 13.5742C18.6579 13.9028 19.3828 14.3844 19.9934 14.9915C20.604 15.5987 21.0884 16.3194 21.4189 17.1127C21.4633 17.2192 21.5048 17.3268 21.5434 17.4353C21.792 18.1345 21.9194 18.8715 21.9194 19.6148H19.7254Z"
          fill="#F3F3F3"
        />
        <path
          d="M15.3436 19.6148H13.1517C13.1517 16.6056 10.6982 14.1662 7.6718 14.1662C4.64536 14.1662 2.19194 16.6056 2.19194 19.6148H0C0 15.402 3.43478 11.9868 7.6718 11.9868C11.9088 11.9868 15.3436 15.402 15.3436 19.6148Z"
          fill="#F3F3F3"
        />
      </svg>
    ),
    route: "/professors",
    span: 2,
    isExternal: false,
    requireSelection: true,
  },
  {
    title: "Εστιατόριο",
    iconSVG: (
      <svg
        className="fill-svg"
        width="100%"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9909 10.8085C18.7524 10.7988 18.5526 10.9844 18.5436 11.2211C18.5414 11.2823 18.5383 11.3434 18.5345 11.4043C18.5198 11.6407 18.7007 11.8442 18.9385 11.8589C18.9475 11.8595 18.9566 11.8597 18.9655 11.8597C19.1916 11.8597 19.3815 11.6847 19.3956 11.4573C19.3998 11.3895 19.4032 11.3215 19.4058 11.2533C19.4147 11.0166 19.229 10.8174 18.9909 10.8085Z"
          fill="#F3F3F3"
        />
        <path
          d="M21.3409 7.19284C21.4073 7.06574 21.407 6.91078 21.3324 6.78158C21.2792 6.68943 21.1954 6.62317 21.0995 6.59014C20.5557 5.3419 19.7746 4.19418 18.7781 3.20334C16.7005 1.13763 13.9382 0 11 0C8.0618 0 5.29947 1.13763 3.22184 3.20343C1.14421 5.26923 0 8.01573 0 10.9371C0 12.4917 0.325316 13.9962 0.941617 15.3755C0.727504 15.612 0.610285 15.9146 0.610285 16.2353C0.610285 16.579 0.744906 16.9021 0.989313 17.1451C1.24163 17.396 1.573 17.5213 1.90437 17.5213C2.00054 17.5213 2.09662 17.5104 2.19089 17.4893C2.5034 17.9032 2.8472 18.2983 3.22184 18.6708C3.75478 19.2007 4.33353 19.6684 4.94807 20.0726C4.79793 20.5206 4.90166 21.0349 5.25968 21.391C5.51199 21.6419 5.84336 21.7672 6.17474 21.7672C6.50611 21.7672 6.83753 21.6418 7.0898 21.391L7.25549 21.2263C8.44027 21.6518 9.70286 21.8743 11 21.8743C13.9382 21.8743 16.7005 20.7367 18.7782 18.6709C20.8558 16.6051 22 13.8586 22 10.9371C22 9.63968 21.7738 8.37696 21.3409 7.19284ZM0.862727 10.9371C0.862727 5.37941 5.41028 0.857797 11 0.857797C11.6552 0.857797 12.2956 0.921241 12.9164 1.0401L11.4081 2.53977C11.2394 2.55451 11.0829 2.57343 11 2.57343C6.36174 2.57343 2.58822 6.32539 2.58822 10.9371C2.58822 11.7842 2.7161 12.602 2.95273 13.3732L1.60295 14.7152C1.1263 13.5478 0.862727 12.2726 0.862727 10.9371ZM9.47994 5.77443L9.49175 5.96408C9.52561 6.50713 9.3231 7.03921 8.93617 7.42393L3.65552 12.6744C3.52202 12.1166 3.45095 11.535 3.45095 10.9371C3.45095 6.96743 6.56661 3.70816 10.4942 3.44849L10.2865 3.65493C9.72482 4.21345 9.43082 4.98601 9.47994 5.77443ZM1.59934 16.5385C1.51787 16.4575 1.47301 16.3498 1.47301 16.2353C1.47301 16.1207 1.51787 16.013 1.59934 15.932L9.5462 8.03056C10.1079 7.47199 10.402 6.69943 10.3528 5.91106L10.341 5.72141C10.3072 5.17835 10.5096 4.64628 10.8966 4.26156L13.8894 1.28597C13.902 1.27345 13.9134 1.26012 13.9241 1.24649L14.0062 1.31028C14.276 1.39376 14.541 1.48818 14.8006 1.59302L11.7364 4.63974C11.568 4.80722 11.568 5.07881 11.7364 5.24633C11.8206 5.33006 11.931 5.37193 12.0414 5.37193C12.1518 5.37193 12.2622 5.33002 12.3465 5.24633L15.5594 2.05174C15.5848 2.02649 15.6059 1.99863 15.6237 1.96937C15.8934 2.10745 16.1559 2.25737 16.411 2.41813L16.1695 2.65828C16.1695 2.65828 16.1695 2.65828 16.1695 2.65828L12.9565 5.85287C12.7881 6.02034 12.7881 6.29193 12.9565 6.45945C13.0408 6.54319 13.1512 6.58506 13.2616 6.58506C13.372 6.58506 13.4824 6.54315 13.5666 6.45945L17.1305 2.9159C18.4508 3.91592 19.5177 5.23013 20.2176 6.74561L18.9833 7.06869C16.8796 7.6193 14.9547 8.71874 13.4165 10.2481L11.6545 12.0001C11.3097 12.343 11.1325 12.8169 11.1683 13.3004C11.1857 13.535 11.0997 13.7649 10.9325 13.9312L7.34323 17.4999C6.32221 16.9353 5.44607 16.1428 4.78491 15.191L10.7664 9.24368C11.1534 8.85892 11.6886 8.65807 12.2347 8.69118L12.4254 8.70289C13.2183 8.75206 13.9954 8.45941 14.5571 7.90089L17.9998 4.47791C18.1682 4.31043 18.1682 4.03884 17.9998 3.87132C17.8313 3.70389 17.5582 3.70389 17.3897 3.87132L13.9471 7.29431C13.5602 7.67907 13.0251 7.88013 12.4787 7.8468L12.288 7.8351C11.4953 7.78588 10.7181 8.07858 10.1564 8.6371L2.20941 16.5385C2.04127 16.7058 1.76761 16.7057 1.59934 16.5385ZM2.93309 17.0321L4.16586 15.8064C4.84331 16.7436 5.71046 17.5359 6.7112 18.1281L5.45944 19.3728C4.48925 18.7405 3.63438 17.9476 2.93309 17.0321ZM6.47982 20.7844C6.31159 20.9517 6.03793 20.9516 5.86975 20.7845C5.70157 20.6173 5.70157 20.3451 5.86975 20.1779L11.5424 14.5377C11.8872 14.1948 12.0645 13.7209 12.0286 13.2374C12.0112 13.0029 12.0972 12.7729 12.2645 12.6066L14.0265 10.8546C15.4568 9.43248 17.2468 8.41015 19.2029 7.8982L19.525 7.81386L6.47982 20.7844ZM11 21.0165C9.9336 21.0165 8.90536 20.8515 7.93925 20.5465L9.35417 19.1397C9.88659 19.2451 10.4369 19.3009 11 19.3009C12.6293 19.3009 14.211 18.835 15.5741 17.9536C16.9013 17.0955 17.9563 15.8903 18.6248 14.4683C18.7257 14.2537 18.6326 13.9984 18.4168 13.8981C18.2009 13.7977 17.9442 13.8903 17.8433 14.1049C16.6041 16.7402 13.918 18.443 11 18.443C10.6981 18.443 10.4005 18.4249 10.1079 18.3903L20.6644 7.8941C20.9711 8.85469 21.1373 9.87688 21.1373 10.9371C21.1373 16.4949 16.5897 21.0165 11 21.0165Z"
          fill="#F3F3F3"
        />
      </svg>
    ),
    route: "/restaurant",
    span: 1,
    isExternal: false,
    requireSelection: false,
  },
  {
    title: "Φοιτητική Μέριμνα",
    iconSVG: (
      <svg
        className="stroke-svg"
        width="100%"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H7.03448C8.10145 1 9.12471 1.42143 9.87916 2.17157C10.6336 2.92172 11.0575 3.93913 11.0575 5V19C11.0575 18.2044 10.7396 17.4413 10.1737 16.8787C9.6079 16.3161 8.84045 16 8.04023 16H1V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1148 1H15.0804C14.0134 1 12.9901 1.42143 12.2357 2.17157C11.4812 2.92172 11.0574 3.93913 11.0574 5V19C11.0574 18.2044 11.3753 17.4413 11.9411 16.8787C12.5069 16.3161 13.2744 16 14.0746 16H21.1148V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    route: "https://www.uom.gr/student-care",
    span: 1,
    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Student's Web",
    iconSVG: (
      <svg
        className="stroke-svg"
        width="100%"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H7.03448C8.10145 1 9.12471 1.42143 9.87916 2.17157C10.6336 2.92172 11.0575 3.93913 11.0575 5V19C11.0575 18.2044 10.7396 17.4413 10.1737 16.8787C9.6079 16.3161 8.84045 16 8.04023 16H1V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1148 1H15.0804C14.0134 1 12.9901 1.42143 12.2357 2.17157C11.4812 2.92172 11.0574 3.93913 11.0574 5V19C11.0574 18.2044 11.3753 17.4413 11.9411 16.8787C12.5069 16.3161 13.2744 16 14.0746 16H21.1148V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    route: "https://services.uom.gr/unistudent/login.asp",
    span: 1,
    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Open Eclass",
    iconSVG: (
      <svg
        className="stroke-svg"
        width="100%"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H7.03448C8.10145 1 9.12471 1.42143 9.87916 2.17157C10.6336 2.92172 11.0575 3.93913 11.0575 5V19C11.0575 18.2044 10.7396 17.4413 10.1737 16.8787C9.6079 16.3161 8.84045 16 8.04023 16H1V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1148 1H15.0804C14.0134 1 12.9901 1.42143 12.2357 2.17157C11.4812 2.92172 11.0574 3.93913 11.0574 5V19C11.0574 18.2044 11.3753 17.4413 11.9411 16.8787C12.5069 16.3161 13.2744 16 14.0746 16H21.1148V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    route: "https://openeclass.uom.gr/",
    span: 1,

    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Εύδοξος",
    iconSVG: (
      <svg
        className="stroke-svg"
        width="100%"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H7.03448C8.10145 1 9.12471 1.42143 9.87916 2.17157C10.6336 2.92172 11.0575 3.93913 11.0575 5V19C11.0575 18.2044 10.7396 17.4413 10.1737 16.8787C9.6079 16.3161 8.84045 16 8.04023 16H1V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1148 1H15.0804C14.0134 1 12.9901 1.42143 12.2357 2.17157C11.4812 2.92172 11.0574 3.93913 11.0574 5V19C11.0574 18.2044 11.3753 17.4413 11.9411 16.8787C12.5069 16.3161 13.2744 16 14.0746 16H21.1148V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    route: "https://eudoxus.gr/",
    span: 1,
    isExternal: true,
    requireSelection: false,
  },
  {
    title: "Υπόλοιπες Υπηρεσίες",
    iconSVG: (
      <svg
        className="stroke-svg"
        width="100%"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H7.03448C8.10145 1 9.12471 1.42143 9.87916 2.17157C10.6336 2.92172 11.0575 3.93913 11.0575 5V19C11.0575 18.2044 10.7396 17.4413 10.1737 16.8787C9.6079 16.3161 8.84045 16 8.04023 16H1V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1148 1H15.0804C14.0134 1 12.9901 1.42143 12.2357 2.17157C11.4812 2.92172 11.0574 3.93913 11.0574 5V19C11.0574 18.2044 11.3753 17.4413 11.9411 16.8787C12.5069 16.3161 13.2744 16 14.0746 16H21.1148V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    route: "/services",
    span: 1,
    isExternal: false,
    requireSelection: false,
  },
  {
    title: "Ορκομωσίες",
    iconSVG: (
      <svg
        className="stroke-svg"
        width="100%"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H7.03448C8.10145 1 9.12471 1.42143 9.87916 2.17157C10.6336 2.92172 11.0575 3.93913 11.0575 5V19C11.0575 18.2044 10.7396 17.4413 10.1737 16.8787C9.6079 16.3161 8.84045 16 8.04023 16H1V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1148 1H15.0804C14.0134 1 12.9901 1.42143 12.2357 2.17157C11.4812 2.92172 11.0574 3.93913 11.0574 5V19C11.0574 18.2044 11.3753 17.4413 11.9411 16.8787C12.5069 16.3161 13.2744 16 14.0746 16H21.1148V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    route: "/graduationpage",
    span: 1,
    isExternal: false,
    requireSelection: true,
  },
  {
    title: "Βιβλιοθήκη",
    iconSVG: (
      <svg
        className="stroke-svg"
        width="100%"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H7.03448C8.10145 1 9.12471 1.42143 9.87916 2.17157C10.6336 2.92172 11.0575 3.93913 11.0575 5V19C11.0575 18.2044 10.7396 17.4413 10.1737 16.8787C9.6079 16.3161 8.84045 16 8.04023 16H1V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1148 1H15.0804C14.0134 1 12.9901 1.42143 12.2357 2.17157C11.4812 2.92172 11.0574 3.93913 11.0574 5V19C11.0574 18.2044 11.3753 17.4413 11.9411 16.8787C12.5069 16.3161 13.2744 16 14.0746 16H21.1148V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    route: "/librarypage",
    span: 1,
    isExternal: false,
    requireSelection: false,
  },
  {
    title: "Πληροφορίες για πρωτοετείς",
    iconSVG: (
      <svg
        className="stroke-svg"
        width="100%"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H7.03448C8.10145 1 9.12471 1.42143 9.87916 2.17157C10.6336 2.92172 11.0575 3.93913 11.0575 5V19C11.0575 18.2044 10.7396 17.4413 10.1737 16.8787C9.6079 16.3161 8.84045 16 8.04023 16H1V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1148 1H15.0804C14.0134 1 12.9901 1.42143 12.2357 2.17157C11.4812 2.92172 11.0574 3.93913 11.0574 5V19C11.0574 18.2044 11.3753 17.4413 11.9411 16.8787C12.5069 16.3161 13.2744 16 14.0746 16H21.1148V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    route: "/firstyearinfo",
    span: 2,
    isExternal: false,
    requireSelection: false,
  },
  {
    title: "Πρόγραμμα Εξετάσεων",
    iconSVG: (
      <svg
        className="stroke-svg"
        width="100%"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H7.03448C8.10145 1 9.12471 1.42143 9.87916 2.17157C10.6336 2.92172 11.0575 3.93913 11.0575 5V19C11.0575 18.2044 10.7396 17.4413 10.1737 16.8787C9.6079 16.3161 8.84045 16 8.04023 16H1V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1148 1H15.0804C14.0134 1 12.9901 1.42143 12.2357 2.17157C11.4812 2.92172 11.0574 3.93913 11.0574 5V19C11.0574 18.2044 11.3753 17.4413 11.9411 16.8787C12.5069 16.3161 13.2744 16 14.0746 16H21.1148V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    route: "/examschedule",
    isExternal: false,
    span: 2,
    requireSelection: true,
  },
  {
    title: "Πρόγραμμα Μαθημάτων",
    iconSVG: (
      <svg
        className="stroke-svg"
        width="100%"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H7.03448C8.10145 1 9.12471 1.42143 9.87916 2.17157C10.6336 2.92172 11.0575 3.93913 11.0575 5V19C11.0575 18.2044 10.7396 17.4413 10.1737 16.8787C9.6079 16.3161 8.84045 16 8.04023 16H1V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.1148 1H15.0804C14.0134 1 12.9901 1.42143 12.2357 2.17157C11.4812 2.92172 11.0574 3.93913 11.0574 5V19C11.0574 18.2044 11.3753 17.4413 11.9411 16.8787C12.5069 16.3161 13.2744 16 14.0746 16H21.1148V1Z"
          stroke="#D9D9D9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    route: "/semesterschedule",
    span: 1,
    isExternal: false,
    requireSelection: true,
  },
];
