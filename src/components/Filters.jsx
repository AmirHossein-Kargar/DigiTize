export default function Filters() {
  return (
    <div className="flex justify-evenly  items-center gap-x-2 mb-11 md:hidden">
      <section className="bg-white h-11 w-48 rounded-sm flex items-center px-2 justify-center gap-2">
        <div className="flex items-center">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#FC5858"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                opacity="0.34"
                d="M6 12H18"
                stroke="#FC5858"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10 17H14"
                stroke="#FC5858"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <svg
              width="14"
              height="21"
              viewBox="0 0 14 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99982 19.3958C6.88899 19.3958 6.77816 19.355 6.69066 19.2675L3.14982 15.7267C2.98066 15.5575 2.98066 15.2775 3.14982 15.1083C3.31899 14.9392 3.59899 14.9392 3.76816 15.1083L6.99982 18.34L10.2315 15.1083C10.4007 14.9392 10.6807 14.9392 10.8498 15.1083C11.019 15.2775 11.019 15.5575 10.8498 15.7267L7.30899 19.2675C7.22149 19.355 7.11066 19.3958 6.99982 19.3958Z"
                fill="#FC5858"
              />
              <path
                d="M7.0625 18.604C6.78917 18.604 6.5625 18.2701 6.5625 17.8675V1.3405C6.5625 0.937883 6.78917 0.604004 7.0625 0.604004C7.33583 0.604004 7.5625 0.937883 7.5625 1.3405V17.8675C7.5625 18.2701 7.33583 18.604 7.0625 18.604Z"
                fill="#FC5858"
              />
            </svg>
          </div>
        </div>
        <div>
          <span className="text-sm text-brand-slate-800 max-xs:text-xs font-bold">محبوب ترین محصول</span>
        </div>
      </section>

      <section className="bg-white h-11 w-48 rounded-sm flex items-center px-2 justify-center gap-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.3999 2.1001H18.5999C19.6999 2.1001 20.5999 3.0001 20.5999 4.1001V6.3001C20.5999 7.1001 20.0999 8.1001 19.5999 8.6001L15.2999 12.4001C14.6999 12.9001 14.2999 13.9001 14.2999 14.7001V19.0001C14.2999 19.6001 13.8999 20.4001 13.3999 20.7001L11.9999 21.6001C10.6999 22.4001 8.8999 21.5001 8.8999 19.9001V14.6001C8.8999 13.9001 8.4999 13.0001 8.0999 12.5001L4.2999 8.5001C3.7999 8.0001 3.3999 7.1001 3.3999 6.5001V4.2001C3.3999 3.0001 4.2999 2.1001 5.3999 2.1001Z"
            stroke="#AFAFAF"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M10.93 2.1001L6 10.0001"
            stroke="#AFAFAF"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm text-brand-slate-800 text-center flex-1 max-xs:text-xs font-bold">
          فیلتر : برند اپل
        </span>
      </section>
    </div>
  );
}
