import useTranslation from "next-translate/useTranslation";

export function SearchBox() {
  const { t } = useTranslation("layout");

  return (
    <div className="w-full h-full flex items-center  border border-qgray-border bg-white search-com">
      <div className="flex-1 bg-red-500 h-full">
        <form action="#" className="h-full">
          <input
            type="text"
            className="search-input"
            placeholder={t("middlebar.search-placeholder")}
          />
        </form>
      </div>
      <div className="w-[1px] h-[22px] bg-qgray-border"></div>

      <button
        className="w-[93px] yellow-btn"
        type="button"
      >
        {t("middlebar.search")}
      </button>
    </div>
  );
}
