import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './FeedSideBar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import BudgetSlider from './BudgetSlider';

const category = [
    '교육',
    '친구',
    '육아',
    '뷰티',
    '스포츠 / 레저',
    '반려동물',
    '언어',
    '컴퓨터',
    '요리 / 예체능'
]

const group_category = [
    '친구 구하기',
    '레슨 찾기'
]

function FeedSideBar({setCategory, setCost, setGroup}) {
    return (
        <div className="feedsidebar">
            <h1 className="feedsidebar__header">
                맞춤 검색
            </h1>
            <ul className="feedsidebar__ul">
            <ExpandMoreIcon className="feedsidebar__close"/>
                <h3 className="feedsidebar__ul__title">카테고리로 찾기</h3>
                {category.map(item => (
                    <li className="feedsidebar__list" onClick={()=>setCategory(item)} key={item}>{ item }</li>
                ))} 
            </ul>

            <ul className="feedsidebar__ul">
            <ExpandMoreIcon className="feedsidebar__close"/>
                <h3 className="feedsidebar__ul__title">지역 검색하기</h3>
                <div className="feedsidebar__search__container">
                    <SearchIcon className="feedsidebar__search__icon" />
                    <input type="text" autoComplete="none" placeholder="e.g. 서울시 서초구" className="feedsidebar__search__input"/>
                </div>
            </ul>

            <ul className="feedsidebar__ul">
            <ExpandMoreIcon className="feedsidebar__close"/>
                <h3 className="feedsidebar__ul__title">타입으로 찾기</h3>
                {group_category.map(item => (
                    <li className="feedsidebar__list" onClick={()=>setGroup(item)} key={item}>{item}</li>
                ))}
            </ul>

            <ul className="feedsidebar__ul">
            <ExpandMoreIcon className="feedsidebar__close"/>
                <h3 className="feedsidebar__ul__title">시급으로 찾기</h3>
                <BudgetSlider setCost={setCost}/>
            </ul>
            
        </div>
    )
}

export default FeedSideBar
