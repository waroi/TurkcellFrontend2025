import React from 'react'
import Table from '../../atoms/Tables/Table';
import DangerButton from '../../atoms/Buttons/DangerButton';
import SecondaryButton from '../../atoms/Buttons/SecondaryButton';
import { Link } from 'react-router';

const JobsTable = ({ jobs, onDelete }) => {
    const columns = [
        { Header: 'Pozisyon', accessor: 'position' },
        { Header: 'Şirket', accessor: 'company' },
        { Header: 'Durum', accessor: 'status' },
        { Header: 'Lokasyon', accessor: 'location' },
        {
            Header: 'Başvuranlar', accessor: 'action', Cell: ({ row }) => (
                <div>
                    <SecondaryButton>Detay</SecondaryButton>
                </div>
            )
        },
        {
            Header: 'İşlem', accessor: 'actions', Cell: ({ row }) => (
                <div>
                    <DangerButton onClick={() => onDelete(row.id)}>Sil</DangerButton>
                    <SecondaryButton>Detay</SecondaryButton>
                </div>
            )
        }
    ];

    return (
        <Table columns={columns} data={jobs} />
    );
};

export default JobsTable;