import React from 'react';
import { useParams } from 'react-router-dom';

function CompanyPage() {
    const { companyName } = useParams();
    
    return (
        <div>
            <h1>Company: {companyName}</h1>
            {/* Burada şirket bilgilerini render edebilirsiniz */}
        </div>
    );
}

export default CompanyPage;
