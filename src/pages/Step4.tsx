import React, {FC} from 'react';
import MaterialTable, {Column} from "@material-table/core";

import MainContainer from "../components/MainContainer";

import {Book, booksSelector} from "../store/Page4Slice";
import {useActions, useAppSelector} from "../store/hooks";



const Step4:FC = () => {
    const {books} = useAppSelector(booksSelector);
    const {add, del} = useActions();

    const columns: Column<Book>[] = [
        {title: "Название", field: "name"},
        {title: "Автор", field: "author"},
        {title: "Количество страниц", field: "pages", align: 'right'},
    ];

    return (
        <MainContainer title="Домашняя библиотека">
            <MaterialTable
                title="Книги"
                columns={columns}
                style={{width: '100%'}}
                options={{
                    filtering: true,
                    pageSizeOptions: [5],
                    addRowPosition: 'first'
                }}
                editable={{
                    onRowAdd: async (newData) => add(newData),
                    onRowDelete: async (oldData) => del(oldData.tableData.id),
                }}
                data={books}
                localization={{
                    body: {
                        editRow: {deleteText: "Вы уверены?"},
                        deleteTooltip: "Удалить",
                        filterRow: {filterTooltip: ""},
                        emptyDataSourceMessage: 'Нет записей',
                    },
                    header: {actions: ""},
                    pagination: {}
                }}
            />

        </MainContainer>
    );
};

export default Step4;