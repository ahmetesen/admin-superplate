import { useAtom } from "jotai"
import { PrimaryButton } from "../components"
import { clickedAtom } from "../store/global"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
    const [clickedCount, setClickedCount] = useAtom(clickedAtom);
    const {t} = useTranslation();
    const navigate = useNavigate();
    const primaryButtonClickHandler = () => {
        setClickedCount(x=>clickedCount+1);
        navigate('./second-page');
    }
    return (
        <>
            <p>{t('common.helloWorld')}</p>
            <p>{t('common.clickedCountLabel',{0:clickedCount})}</p>
            <PrimaryButton onClick={primaryButtonClickHandler} label={t('welcome.primaryButton.label')}/>
        </>
    )
}