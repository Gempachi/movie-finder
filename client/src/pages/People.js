import React, { useState, useEffect } from 'react';
import PeopleGrid from '../components/PeopleGrid';
import '../styles/People.css';
import { personAPI } from '../api';
import PersonCard from '../components/PersonCard';
import Pagination from '../components/Pagination';
import useMedia, { mobileMediaQuery } from '../utilities/hooks/useMedia';

function People() {
    const [people, setPeople] = useState([]);
    const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
    const [loading, setLoading] = useState(false);
    const isMobile = useMedia(mobileMediaQuery);

    useEffect(() => {
        fetchPeople();
    }, [pagination.page, pagination.totalPages]);

    async function fetchPeople() {
        setLoading(true);

        const res = await personAPI.getPopularPeople({ page: pagination.page });

        setPagination({
            page: res.data.page,
            totalPages: res.data.total_pages
        });

        const people = res.data.results;
        setPeople(people);

        setLoading(false);
    }

    function handlePageChange(e, data) {
        setPagination(prevState => ({ ...prevState, page: data.activePage }));
    }

    return (
        <div className="People">
            {loading
                ? <div>Loading...</div>
                :
                <>
                    <div className="People__people-container">
                        <PeopleGrid
                            title='Popular People'
                            columns={4}
                            doubling
                        >
                            {people.map(person =>
                                <PersonCard
                                    key={person.id}
                                    id={person.id}
                                    name={person.name}
                                    image={person.profile_path}
                                />
                            )}
                        </PeopleGrid>
                    </div>
                    <Pagination
                        topPadded
                        activePage={pagination.page}
                        totalPages={pagination.totalPages}
                        siblingRange={isMobile ? 0 : 2}
                        boundaryRange={isMobile ? 1 : 2}
                        firstItem={null}
                        lastItem={null}
                        onPageChange={handlePageChange}
                    />
                </>
            }
        </div>
    );
}

export default People;
