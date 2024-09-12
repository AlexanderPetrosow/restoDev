import OrderedItem from "./orderedItem/orderedItem";

const OrderedItemsList: React.FC = () => {
  return (
    <div>
      <div className="d-flex">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_6_1858)">
            <g clipPath="url(#clip1_6_1858)">
              <g clipPath="url(#clip2_6_1858)">
                <mask
                  id="mask0_6_1858"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="25"
                  height="24"
                >
                  <path d="M24.6699 0H0.669922V24H24.6699V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_6_1858)">
                  <path
                    d="M20.9023 11.0836C20.8744 10.9627 20.817 10.8506 20.7352 10.7574C20.6534 10.6641 20.5498 10.5926 20.4335 10.5493L15.0335 8.52425L16.4023 1.65238C16.4337 1.4932 16.4134 1.32812 16.3442 1.18134C16.2751 1.03456 16.1607 0.913801 16.0179 0.836755C15.8737 0.760042 15.7081 0.733158 15.5471 0.760287C15.386 0.787416 15.2384 0.867036 15.1273 0.986755L4.62729 12.2368C4.54125 12.326 4.479 12.4355 4.44624 12.555C4.41348 12.6746 4.41127 12.8005 4.43979 12.9211C4.46914 13.0414 4.52708 13.1527 4.60869 13.2457C4.6903 13.3388 4.79316 13.4107 4.90854 13.4555L10.3085 15.4805L8.93979 22.3524C8.90831 22.5116 8.92865 22.6766 8.99782 22.8234C9.06699 22.9702 9.18136 23.091 9.32416 23.168C9.43181 23.2223 9.55048 23.2512 9.67104 23.2524C9.77292 23.2528 9.8738 23.2322 9.96736 23.1919C10.0609 23.1516 10.1452 23.0924 10.2148 23.018L20.7148 11.768C20.8008 11.6787 20.8631 11.5693 20.8958 11.4497C20.9286 11.3302 20.9308 11.2043 20.9023 11.0836Z"
                    fill="url(#paint0_linear_6_1858)"
                  />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_6_1858"
              x1="6.8965"
              y1="0.861759"
              x2="24.3848"
              y2="17.9619"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FD75DF" />
              <stop offset="1" stopColor="#A743F7" />
            </linearGradient>
            <clipPath id="clip0_6_1858">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.669922)"
              />
            </clipPath>
            <clipPath id="clip1_6_1858">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.669922)"
              />
            </clipPath>
            <clipPath id="clip2_6_1858">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
        </svg>
        <p>Приготовление заказа может занять больше времени</p>
      </div>

      <div>
        <span><strong>Позиции в заказе</strong> <p>~45 минут</p></span>
        <OrderedItem />
      </div>
    </div>
  );
};

export default OrderedItemsList;
