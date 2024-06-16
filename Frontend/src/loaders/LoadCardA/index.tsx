import * as S from './styles'

const LoadCardA = () => {
    return (
        <S.Container className="card">
            <div className="pulsate cardA-title"></div>
            <div className="pulsate cardA-subtitle"></div>         
            <div className='loadList'>               
                    <div className='pulsate loadList-Icon'></div>
                    <div className='pulsate loadList-temperature'></div>
                    <div className='loadListCondition'>
                        <div className='pulsate  loadListCondition-title'></div>
                        <div className='pulsate loadListCondition-subTitle'></div>
                    </div>            
            </div>
            <div className='pulsate CardA-information'></div>
            <div className='loadConditions'>
                <div className='pulsate loadConditions-condition'></div>
                <div className='pulsate loadConditions-button'></div>
            </div>
            

        </S.Container>
    )
}

export default LoadCardA
