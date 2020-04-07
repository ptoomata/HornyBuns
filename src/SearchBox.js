import React from 'react';
import 'tachyons';

const SearchBox = ({ onSearchBox }) => {
    return(
        <div>
            <input 
                onChange={onSearchBox} 
                className='tc bg-light-blue w-25 pa3 ma3' 
                type="text" 
                placeholder="Hey puti who are you looking for?">
            </input>
        </div>
    );
}

export default SearchBox;