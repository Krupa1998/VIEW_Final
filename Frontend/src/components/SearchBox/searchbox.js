/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import SearchResult from './SearchResult';

const Searchbox = (props) => {

    const [searchVideos, setSearchVideos] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [title, setTitle] = useState("");

    const onChangeHandler = (e) => {
        if (e.target.value === "") {
            setIsSearch(false);
            setSearchVideos([]);
            props.onSearchCall(false);
        }
        setTitle(e.target.value);
    }

    const onHadleSubmit = (e) => {
        e.preventDefault();
        props.onSearchCall(true);

        fetch(`https://view-api-backend.herokuapp.com/videos/title?title=${title}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setIsSearch(true);
                setSearchVideos(data.body);
            });

    }

    return (
        <div className="container">

            <form className="d-flex" onSubmit={onHadleSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={title}
                    onChange={onChangeHandler}
                />
            </form>

            {isSearch && (searchVideos !== null ? <SearchResult videos={searchVideos} /> : <h4 className="mt-2">Movie Not Found</h4>)}

        </div >
    )
}

export default Searchbox
