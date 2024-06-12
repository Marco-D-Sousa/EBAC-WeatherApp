import { useState } from 'react'

import HoursCard from '../../components/HoursCard'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'
import { useGetNewLocationQuery } from '../../services/api'

import * as S from './styles'
import SuggestionsCard from '../../components/SuggestionsCard'
import LoadCardB from '../../loaders/LoadCardB'

const SectionHours = () => {

    const [astroIsOpen, setAstroIsOpen] = useState(false)

    const storedLocation = useSelector((state: RootReducer) => state.mainPlace.place)

    const { data } = useGetNewLocationQuery(storedLocation)

    return (
        <S.SectionHours className="section">
            {data ? (
                <div className="card cardHeightB">
                    <S.HoursContainer className="fadeIn">
                        <S.HoursCardBtn onClick={() => setAstroIsOpen(false)} className={astroIsOpen ? '' : 'isSelected'}>De hora em hora</S.HoursCardBtn>
                        <S.HoursCardBtn onClick={() => setAstroIsOpen(true)} className={astroIsOpen ? 'isSelected' : ''}>Sol e Lua</S.HoursCardBtn>
                        {!astroIsOpen ? (
                            <HoursCard />
                        ) : (
                            <p>astro</p>
                        )}
                    </S.HoursContainer>
                </div>
            ) : (
                <LoadCardB />
            )}
            <SuggestionsCard />
        </S.SectionHours>
    )
}

export default SectionHours