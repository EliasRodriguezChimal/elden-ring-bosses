import React from 'react';
import queryString from 'query-string';

import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { BossCard } from '../bosses/BossCard';
import { useFetchBossesByName } from '../hooks/useFetchBossesByName';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [{ searchText }, handleInputChange] = useForm({
        searchText: q   
    });

    const {data: bossList} = useFetchBossesByName(q);

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchText.trim().length <= 0) {
            return;
        }

        navigate(`?q=${searchText}`);   
    }

    return (
        <>
            <h1>Search Results</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Search </h4>
                    <hr />

                    <form
                        onSubmit={handleSearch}
                    >
                        <input
                            type="text"
                            placeholder="Search hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className="alert alert-info"> Search hero </div>
                            : (bossList.length === 0)
                            && <div className="alert alert-danger"> No results found: {q} </div>
                    }

                    {
                        bossList.map(boss => (
                            <BossCard
                                key={boss.id}
                                {...boss}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
