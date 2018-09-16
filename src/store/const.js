export const STATE_OLD_TASK = [7, 8, 9, 10, 12];
export const STATE_CLOSE_TASK = [4, 5];
// export const STATE_CLOSE_TASK = [1, 4, 5];
export const Module_ID = 510600002;
export const SHOW_HIST_COLUMNS = [
    'State', 'dtChange', 'dtt3', 'bint7', 'bint4', 'CloseComment', 'RemindComment', 'ExecutorName', 'AuthorName'
];
export const fiiiiiix = {};
export const SHOW_COLUMNS = [
    'State',
    'PatState',
    'st1',
    'int2',
    'st20',
    'st32',
    'Date',
    'Time',
    'Version',
    'CloseComment',
    'RemindComment',
    'ExecutorName',
    'IdNews'
];
export const BTN_INFO_STAT = [
    {
        key: 1,
        text: 'Активные',
        iconIndex: 24,
        dataName: 'activeTaskFilter',
        dataName2: 'activeTaskFilterOnDate'
    },
    {
        key: 2,
        text: 'Переносы за период',
        iconIndex: 13,
        dataName: 'moveTaskFilter',
    },
    {
        key: 3,
        text: 'Переходы за период',
        iconIndex: 70,
        dataName: 'stepTaskFilter',
    },
    {
        key: 5,
        text: 'Консультации на период',
        iconIndex: 28,
        dataName: 'consulTaskFilter',
    },
    {
        key: 7,
        text: 'Цепочки за период',
        iconIndex: 34,
        dataName: 'chainTaskFilter',
    },
    {
        key: 6,
        text: 'Без результата за период',
        iconIndex: 64,
        dataName: 'woresTaskFilter',
    },
    {
        key: 4,
        text: 'Отмены за период',
        iconIndex: 63,
        dataName: 'closeTaskFilter',
    },
];

export const BTN_INFO = [
    {
        key: 1,
        text: 'Направлен на консультацию',
        filterValue: 16960007,
        actionKeys: [1, 3, 4, 6, 7, 9, 14],
        showColumns: _.union(SHOW_COLUMNS, 'Description'),
        showHistColumns: SHOW_HIST_COLUMNS
    },
    {
        key: 2,
        text: 'Записан на консультацию',
        filterValue: 16970006,
        actionKeys: [1, 3, 4, 6, 7, 9, 14],
        showColumns: _.union(SHOW_COLUMNS, 'Description', 'st21', 'dtt5', 'bint10'),
        showHistColumns: _.union(SHOW_HIST_COLUMNS, 'dtt5', 'bint10', 'bint120')
    },
    {
        key: 3,
        text: 'Консультация проведена',
        filterValue: 16980005,
        actionKeys: [1, 3, 4, 6, 7, 9, 14],
        showColumns: _.union(SHOW_COLUMNS, 'Description', 'dtt5', 'bint10'),
        showHistColumns: _.union(SHOW_HIST_COLUMNS, 'dtt5', 'bint10', 'bint120')
    },
    {
        key: 4,
        text: 'Выдано направление',
        filterValue: 16990004,
        actionKeys: [1, 3, 4, 6, 7, 9, 14],
        showColumns: _.union(SHOW_COLUMNS, 'Description', 'st21', 'mnye8'),
        showHistColumns: _.union(SHOW_HIST_COLUMNS, 'dtt5', 'bint10', 'bint120')
    },
    {
        key: 5,
        text: 'Оформлена заявка',
        filterValue: 17000001,
        actionKeys: [3, 4, 6, 7, 9, 11, 14],
        showColumns: _.union(SHOW_COLUMNS, 'Description', 'st25', 'st21', 'dt2', 'dtt6', 'bint10'),
        showHistColumns: _.union(SHOW_HIST_COLUMNS, 'dtt5', 'bint10', 'mnye8', 'bint120')
    },
    {
        key: 6,
        text: 'Палата забронирована',
        filterValue: 17010000,
        actionKeys: [3, 4, 6, 7, 9, 12, 13, 14],
        showColumns: _.union(SHOW_COLUMNS, 'Description', 'st25', 'st21', 'st22', 'dt2', 'dt7', 'dtt6', 'bint10'),
        showHistColumns: _.union(SHOW_HIST_COLUMNS, 'dtt5', 'bint10', 'mnye8', 'dt2', 'dtt6', 'bint120')
    },
    {
        key: 7,
        text: 'Госпитализирован',
        filterValue: 17020009,
        actionKeys: [5, 6, 7, 14],
        showColumns: _.union(SHOW_COLUMNS, 'Description', 'st25', 'st21', 'st22', 'dt2', 'dt7', 'dtt6', 'bint10'),
        showHistColumns: _.union(SHOW_HIST_COLUMNS, 'dtt5', 'bint10', 'mnye8', 'dt2', 'dt7', 'dtt6', 'bint120')
    },
    {
        key: 7.1,
        text: 'К выписке',
        filterValue: 71,
        actionKeys: [6, 7, 10, 14],
        showColumns: _.union(SHOW_COLUMNS, 'Description', 'st25', 'st21', 'st22', 'dt2', 'dt7', 'dtt6', 'bint10'),
        showHistColumns: _.union(SHOW_HIST_COLUMNS, 'dtt5', 'bint10', 'mnye8', 'dt2', 'dt7', 'dtt6', 'bint120')
    },
    {
        key: 8,
        text: 'Выписан',
        filterValue: 17030008,
        actionKeys: [6, 7, 14],
        showColumns: _.union(SHOW_COLUMNS, 'Description', 'st25', 'st21', 'st22', 'dt2', 'dt7', 'dtt6', 'bint10'),
        showHistColumns: _.union(SHOW_HIST_COLUMNS, 'dtt5', 'bint10', 'mnye8', 'dt2', 'dt7', 'dtt6', 'bint120')
    },
];