import { useAtom } from "jotai";
import { PrimaryButton } from "../components"
import { clickedAtom } from "src/store/global";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const SecondPage = () => {
    const [clickedCount, setClickedCount] = useAtom(clickedAtom);
    const {t} = useTranslation();
    const navigate = useNavigate();
    const primaryButtonClickHandler = () => {
        setClickedCount(x=>clickedCount+1);
        navigate(-1);
    }
    return (
        <>
            <p>{t('common.clickedCountLabel',{0:clickedCount})}</p>
            <PrimaryButton onClick={primaryButtonClickHandler} label={t('secondPage.primaryButton.label')}/>
        </>
    )
}