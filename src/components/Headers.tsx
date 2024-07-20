import { FC } from 'react';

interface Props {
  date: string;
}
export const Header: FC<Props> = () => {
  return (
    <header>
      <div className="logo">
        <svg
          width="77"
          height="66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M73 26.24c-1.88-.713-3.676-3.956-3.948-5.89 1.19 5.325 3.46 16.994 3.008 21.065-.564 5.087-8.271 2.41-10.59-12.675-.376-1.517.063 18.744-1.629 14.906-1.691-3.838-3.007-14.281-3.571-13.3-.564.982-.69 19.37-1.818 16.335-1.127-3.035-4.636-19.19-5.326-16.96-.689 2.232-.626 43.291-22.996 2.946m0 .182c1.671 2.916 4.9 10.05 4.449 15.264-.564 6.515-9.023-4.017-5.953-17.227.313-.893-2.38 24.367-5.765 18.298-3.383-6.07-5.952-45.254-6.39-47.129-.44-1.874 6.954 44.54 4.01 57.215C13.534 71.944-4.45 58.199 4.45 29.368"
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m71.052 19.35.098-.022a.1.1 0 0 0-.197.036l.1-.014Zm3.912 5.984a.1.1 0 1 0 .072-.187l-.072.187Zm-.904 15.08-.1-.01.1.01ZM63.47 27.74l.1-.015-.002-.01-.097.025Zm-1.629 14.906.092-.04-.092.04Zm-3.571-13.3-.087-.05.087.05Zm-7.144-.624-.095-.03.095.03Zm-22.908 2.897a.1.1 0 1 0-.175.097l.175-.097Zm-.001.18a.1.1 0 0 0-.174.1l.174-.1Zm4.362 15.313.1.01-.1-.01Zm-5.953-17.226-.095-.034-.002.011.097.023Zm-5.765 18.298.088-.05-.088.05Zm-6.39-47.129.096-.023-.097.023Zm4.01 57.215-.098-.023.097.023ZM6.544 28.398a.1.1 0 1 0-.191-.06l.191.06ZM76 49.1a.1.1 0 0 0 0-.2v.2Zm-1-.2a.1.1 0 0 0 0 .2v-.2Zm-4.047-29.536c.036.253.097.527.18.813l.192-.056a5.724 5.724 0 0 1-.174-.785l-.198.028Zm.18.813c.281.973.82 2.1 1.494 3.063.672.96 1.49 1.772 2.338 2.094l.07-.187c-.791-.3-1.58-1.073-2.245-2.021-.662-.947-1.19-2.054-1.465-3.005l-.192.056Zm-.178-.805.176.799.195-.043c-.06-.28-.12-.547-.176-.8l-.195.044Zm.176.799c.611 2.806 1.426 6.902 2.034 10.779.61 3.882 1.009 7.53.796 9.454l.198.022c.217-1.955-.188-5.63-.796-9.507-.609-3.882-1.425-7.982-2.037-10.791l-.195.043Zm2.83 20.233c-.139 1.247-.71 1.987-1.494 2.201-.792.217-1.848-.09-2.98-1.04-2.26-1.896-4.76-6.31-5.918-13.84l-.197.03c1.16 7.554 3.673 12.022 5.987 13.964 1.155.969 2.277 1.32 3.16 1.08.892-.244 1.497-1.077 1.64-2.373l-.198-.022ZM63.568 27.716a.498.498 0 0 0-.039-.102.125.125 0 0 0-.04-.04.108.108 0 0 0-.093-.009.115.115 0 0 0-.054.042.209.209 0 0 0-.03.066 2.616 2.616 0 0 0-.05.423 49.211 49.211 0 0 0-.067 1.87c-.038 1.628-.071 3.897-.146 6.094-.074 2.198-.19 4.318-.391 5.648-.05.332-.106.612-.167.83-.062.223-.126.37-.187.444-.03.036-.05.046-.061.048-.008.002-.023.002-.051-.017-.066-.046-.154-.168-.26-.407l-.182.08c.106.241.212.41.327.49a.262.262 0 0 0 .207.05.315.315 0 0 0 .175-.117c.09-.11.162-.29.225-.517.064-.23.12-.518.172-.854.203-1.343.319-3.474.393-5.671.075-2.199.108-4.471.146-6.096.02-.814.04-1.463.067-1.862.013-.203.029-.33.043-.383.004-.014.005-.01-.001-.002a.084.084 0 0 1-.04.03.092.092 0 0 1-.079-.009.075.075 0 0 1-.023-.022c-.002-.003-.002-.003 0 0l.011.041.195-.048Zm-1.635 14.89c-.84-1.907-1.59-5.465-2.203-8.437-.305-1.483-.575-2.82-.805-3.723-.115-.45-.221-.8-.319-1.01a.925.925 0 0 0-.076-.137.311.311 0 0 0-.096-.094.161.161 0 0 0-.152-.008.235.235 0 0 0-.099.1l.173.1c.014-.024.02-.023.011-.019a.042.042 0 0 1-.02.004c-.008 0-.013-.003-.013-.003.002 0 .013.009.032.035.017.025.037.06.06.107.088.19.19.523.305.974.228.898.498 2.229.804 3.714.61 2.963 1.364 6.546 2.215 8.477l.183-.08Zm-3.75-13.31a.711.711 0 0 0-.062.167 2.85 2.85 0 0 0-.05.245c-.034.192-.065.44-.094.737-.06.593-.116 1.381-.17 2.289-.109 1.814-.213 4.113-.334 6.28-.122 2.171-.26 4.212-.44 5.52-.044.326-.09.606-.14.829-.05.226-.1.386-.15.481a.214.214 0 0 1-.054.075c-.004.002-.002 0 .002 0h.007c-.007-.003-.028-.019-.057-.067a1.21 1.21 0 0 1-.095-.206l-.187.07c.036.098.073.178.111.24.037.06.081.113.138.142a.185.185 0 0 0 .192-.013.394.394 0 0 0 .12-.148 2.28 2.28 0 0 0 .168-.53c.051-.232.1-.517.144-.846.18-1.317.32-3.366.44-5.535.122-2.173.226-4.465.334-6.28a60.5 60.5 0 0 1 .17-2.281c.03-.295.06-.538.091-.723.016-.092.032-.168.048-.228a.537.537 0 0 1 .041-.117l-.173-.1Zm-1.637 16.35c-.28-.753-.709-2.326-1.208-4.234-.498-1.906-1.064-4.141-1.616-6.211-.553-2.07-1.092-3.978-1.537-5.231-.221-.623-.423-1.095-.596-1.342a.74.74 0 0 0-.136-.153.253.253 0 0 0-.171-.064.22.22 0 0 0-.162.093.598.598 0 0 0-.09.188l.192.06a.41.41 0 0 1 .056-.125c.016-.02.02-.016.015-.016-.003 0 .008-.002.035.02a.552.552 0 0 1 .097.112c.155.221.35.669.572 1.294.441 1.244.98 3.145 1.531 5.215.553 2.07 1.118 4.302 1.617 6.21.497 1.905.93 3.49 1.214 4.254l.187-.07Zm-5.515-16.954c-.047.151-.088.453-.13.864-.043.414-.089.951-.143 1.58-.108 1.257-.249 2.884-.47 4.649-.44 3.532-1.194 7.597-2.618 10.33-.712 1.366-1.584 2.385-2.655 2.847-1.064.459-2.346.376-3.902-.508-1.559-.885-3.385-2.57-5.522-5.3-2.136-2.729-4.579-6.495-7.373-11.535l-.175.097c2.797 5.046 5.246 8.822 7.39 11.561 2.145 2.739 3.99 4.447 5.581 5.351 1.595.906 2.944 1.008 4.08.517 1.132-.488 2.032-1.554 2.753-2.938 1.442-2.768 2.2-6.865 2.64-10.398.221-1.768.363-3.4.47-4.657.054-.629.1-1.163.143-1.576.043-.416.082-.697.122-.825l-.191-.059ZM28.043 31.9c.833 1.453 2.055 3.96 3.013 6.753.958 2.795 1.647 5.866 1.423 8.452l.2.017c.227-2.627-.473-5.73-1.434-8.534-.962-2.806-2.19-5.325-3.028-6.787l-.174.099Zm4.436 15.205c-.058.675-.201 1.152-.399 1.457-.194.301-.44.434-.717.434-.285 0-.622-.14-.992-.424-.368-.284-.759-.705-1.15-1.25-1.566-2.181-3.098-6.297-3.162-11.295l-.2.002c.064 5.033 1.606 9.19 3.2 11.41.398.555.802.992 1.19 1.291.387.298.766.466 1.114.466.355 0 .66-.176.885-.525.223-.345.37-.859.43-1.549l-.199-.017Zm-6.42-11.078c-.024-1.929.17-3.988.665-6.118l-.195-.045a25.773 25.773 0 0 0-.67 6.165l.2-.002Zm.662-6.107c.003-.01.002-.003-.006.007-.002.003-.018.025-.051.034a.097.097 0 0 1-.098-.032c-.012-.014-.016-.027-.016-.029a.264.264 0 0 1 0 .018c.002.05 0 .145-.009.285-.016.278-.054.717-.111 1.278a114.43 114.43 0 0 1-.57 4.533l.198.029c.26-1.801.455-3.416.57-4.541.058-.563.096-1.005.113-1.287.008-.14.012-.244.01-.306a.423.423 0 0 0-.01-.068.117.117 0 0 0-.022-.04.103.103 0 0 0-.164.006.177.177 0 0 0-.023.046l.189.067Zm-.86 6.094c-.49 3.373-1.211 7.395-2.085 10.076a12.82 12.82 0 0 1-.679 1.722c-.235.47-.473.815-.71 1.016-.233.197-.454.246-.675.155-.233-.096-.49-.358-.763-.847l-.175.097c.28.5.564.812.862.935.31.128.608.042.88-.188.268-.226.52-.6.76-1.078.24-.48.47-1.075.69-1.75.88-2.7 1.603-6.735 2.092-10.11l-.198-.028Zm-4.912 12.122c-.343-.615-.68-1.584-1.01-2.836-.33-1.25-.65-2.777-.958-4.503l-.197.035c.309 1.729.63 3.26.96 4.519.332 1.255.675 2.244 1.03 2.882l.175-.097Zm-1.968-7.34C16.9 29.156 15.345 8.52 14.758 2.6l-.199.02c.586 5.909 2.142 26.56 4.225 38.211l.197-.035ZM14.758 2.6c-.082-.827-.146-1.376-.19-1.568l-.195.046c.04.175.103.707.186 1.542l.2-.02Zm-.19-1.568a.848.848 0 0 0-.011-.04c-.002-.007-.007-.026-.016-.041a.1.1 0 0 0-.133-.04c-.036.017-.047.05-.05.055a.107.107 0 0 0-.005.022.21.21 0 0 0-.001.04c.002.043.012.135.028.267.033.268.095.719.18 1.329l.198-.028c-.085-.61-.146-1.06-.18-1.325a4.498 4.498 0 0 1-.027-.252v-.001l-.005.019c-.002.004-.013.035-.049.053a.1.1 0 0 1-.106-.012c-.014-.011-.02-.023-.022-.026-.006-.01-.008-.017-.004-.006a.676.676 0 0 1 .008.032l.194-.046Zm-.008 1.592c.753 5.424 3.345 23.501 4.222 38.195l.2-.012c-.878-14.703-3.471-32.789-4.224-38.21l-.198.027Zm4.222 38.195c.437 7.318.448 13.782-.4 17.428l.196.045c.854-3.678.84-10.17.404-17.485l-.2.012Zm-.4 17.428c-.73 3.145-2.38 4.61-4.277 4.652-1.912.042-4.131-1.356-5.999-4.072-3.73-5.424-6.003-16.035-1.56-30.43l-.192-.058C1.899 42.774 4.168 53.452 7.941 58.94c1.885 2.74 4.158 4.203 6.168 4.159 2.025-.045 3.727-1.614 4.469-4.807l-.195-.045ZM76 48.9h-1v.2h1v-.2Z"
            fill="#FFD924"
          />
          <path
            d="M27.036 31.173c22.283 39.694 22.22-.703 22.907-2.898.687-2.196 4.182 13.7 5.305 16.685 1.124 2.986 1.249-15.105 1.81-16.07.562-.967 1.873 9.308 3.558 13.084 1.685 3.777 1.248-16.158 1.623-14.665 2.31 14.841 9.987 17.476 10.548 12.47.45-4.005-1.81-15.485-2.996-20.725.32 1.388 1.411 4.313 3.209 4.91m-45.964 7.388c1.665 2.869 4.881 9.888 4.432 15.017-.562 6.41-8.988-3.952-5.93-16.95.312-.878-2.372 23.975-5.742 18.003-3.37-5.971-5.93-44.524-6.367-46.368-.437-1.844 6.929 43.822 3.995 56.292-2.934 12.47-20.847-1.054-11.984-29.42"
            stroke="#FFBB1B"
            strokeWidth=".01"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M74 50h-1"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M74 48c1.248.691 3.197 2.46 1.017 4"
            stroke="#EFCB22"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* <p>{date}...</p> */}
    </header>
  );
};
