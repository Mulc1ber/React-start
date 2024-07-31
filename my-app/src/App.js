import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
    const [value, setValue] = useState();
    const [list, setList] = useState([]);
    const [error, setError] = useState();
    const [isValueVaild, setIsValueVaild] = useState(false);

    function onInputButtonClick() {
        const promptValue = prompt('Введите значение');
        if (promptValue === null || promptValue.trim().length === 0) {
            setError('Введено пустое значение или отменено');
            setIsValueVaild(false);
        } else if (promptValue.trim().length < 3) {
            setError('Введенное значение должно содержать минимум 3 символа');
            setIsValueVaild(false);
        } else {
            setValue(promptValue);
            setError('');
            setIsValueVaild(true);
        }
    }

    function onAddButtonClick() {
        if (value !== '') {
            const updatedList = [...list, { id: Date.now(), value, data: new Date() }];
            setList(updatedList);
            setValue('');
            setError('');
            setIsValueVaild(false);
        }
    }

    return (
        <div className={styles['app']}>
            <h1 className={styles['page-heading']}>Ввод значения</h1>
            <p className={styles['no-margin-text']}>
                Текущее значение <code>value</code>: "
                <output className={styles['current-value']}>{value}</output>"
            </p>

            {error !== '' && <div className={styles['error']}>{error}</div>}

            <div className={styles['buttons-container']}>
                <button className={styles['button']} onClick={onInputButtonClick}>
                    Ввести новое
                </button>
                <button
                    className={styles['button']}
                    disabled={!isValueVaild}
                    onClick={onAddButtonClick}
                >
                    Добавить в список
                </button>
            </div>
            <div className={styles['list-container']}>
                <h2 className={styles['list-heading']}>Список:</h2>

                {list.length === 0 && (
                    <p className={styles['no-margin-tex']}>Нет добавленных элементов</p>
                )}

                <ul className={styles['list']}>
                    {list.map(({ id, value, data }) => {
                        const formatterDate = data.toLocaleString('ru-RU');

                        return (
                            <li className={styles['list-item']} key={id}>
                                {value} - {formatterDate}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
