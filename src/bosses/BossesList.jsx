import React from 'react';
import PropTypes from 'prop-types';
import { useFetchBossesByRegion } from '../hooks/useFetchBossesByRegion';
import { BossCard } from './BossCard';

export const BossesList = ({ region }) => {
    const {data: bossesFiltered} = useFetchBossesByRegion(region);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                bossesFiltered.map(boss => (
                    <BossCard
                        key={boss.id}
                        {...boss}   
                    />
                ))
            }
        </div>
    )
}

BossesList.propTypes = {
    region: PropTypes.string.isRequired
}