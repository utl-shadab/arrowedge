import { Dispatch, SetStateAction } from "react";
import { MENULINKS } from "../../constants";

const Menu = ({
  setmenuVisible,
}: {
  setmenuVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <section
      className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center"
      style={{ visibility: "hidden" }}
    >
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="opacity-0 overflow-y-auto flex flex-none justify-center items-center max-h-screen">
          <ul
            className="list-none py-4 px-0 m-0 block max-h-screen"
            role="menu"
          >
            {MENULINKS.map((el) => (
              <li
                className="p-0 m-4 sm:m-5 md:m-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl block"
                key={el.name}
                role="menuitem"
              >
                <a
                  className="link relative inline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl duration-300 hover:no-underline"
                  href={`#${el.ref}`}
                  onClick={() => setmenuVisible(false)}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
