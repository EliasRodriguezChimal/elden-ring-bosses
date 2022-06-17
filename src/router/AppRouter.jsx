import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { AltusPlateauPage } from "../pages/AltusPlateauPage";
import { BossPage } from "../pages/BossPage";
import { CaelidPage } from "../pages/CaelidPage";
import { ConsecratedSnowfieldPage } from "../pages/ConsecratedSnowfieldPage";
import { DragonbarrowPage } from "../pages/DragonbarrowPage";
import { InvalidPage } from "../pages/InvalidPage";
import { LimgravePage } from "../pages/LimgravePage";
import { LiurniaPage } from "../pages/LiurniaPage";
import { MountaintopsGiantsPage } from "../pages/MountaintopsGiants";
import { MountGelmirPage } from "../pages/MountGelmirPage";
import { SearchPage } from "../pages/SearchPage";
import { WeepingPeninsulaPage } from "../pages/WeepingPeninsulaPage";

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/search" element={<SearchPage />} />
                <Route path="/limgrave" element={<LimgravePage />} />
                <Route path="/altusplateau" element={<AltusPlateauPage />} />
                <Route path="/liurnia" element={<LiurniaPage />} />
                <Route path="/consecratedsnowfield" element={<ConsecratedSnowfieldPage />} />
                <Route path="/caelid" element={<CaelidPage />} />
                <Route path="/dragonbarrow" element={<DragonbarrowPage />} />
                <Route path="/weepingpeninsula" element={<WeepingPeninsulaPage />} />
                <Route path="/mountaintopsgiants" element={<MountaintopsGiantsPage />} />
                <Route path="/mountgelmir" element={<MountGelmirPage />} />
                <Route path="/boss/:bossId" element={<BossPage />} />
                <Route path="/" element={<LimgravePage />} />
                <Route path="/*" element={<InvalidPage />} />
            </Routes>

        </>
    )
}
