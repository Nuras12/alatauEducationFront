const months = {
    '01': 'Январь',
    '02': 'Февраль',
    '03': 'Март',
    '04': 'Апрель',
    '05': 'Май',
    '06': 'Июнь',
    '07': 'Июль',
    '08': 'Август',
    '09': 'Сентябрь',
    '10': 'Октябрь',
    '11': 'Ноябрь',
    '12': 'Декабрь'
}

export default (dateString: string) => {
    const originalDate = new Date(dateString);
    const formattedDate = `${months[padZero(originalDate.getMonth() + 1)]} ${padZero(originalDate.getDate())}, ${originalDate.getFullYear()}`;
    function padZero(num) {
        return num.toString().padStart(2, '0');
    }
    return formattedDate    
}