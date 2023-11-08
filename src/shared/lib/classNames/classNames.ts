type Mods = Record<string, boolean | string>

/**
 * Генерирует строку с именами классов для использования в атрибуте class HTML элемента.
 *
 * @param {string} cls - Основное имя класса, которое всегда будет добавлено в результат.
 * @param {Mods} [mods] - Объект, где ключи представляют имена модификаторов классов,
 *                        а значения - булевы индикаторы, которые определяют, следует ли добавлять модификатор к имени класса.
 *                        Модификатор добавляется только в том случае, если его значение истинно.
 * @param {string[]} [additional] - Дополнительный массив имен классов, которые будут добавлены в результат.
 *                                  Все не истинные значения (например, пустые строки, null или undefined) будут отфильтрованы.
 * @returns {string} Строка, содержащая все имена классов, разделенных пробелом, готовая к использованию в атрибуте class.
 *
 * Пример использования:
 * classNames('button', { 'button--active': isActive, 'button--disabled': isDisabled }, ['class1', 'class2'])
 * // Вернет 'button button--active class1 class2' если isActive === true и isDisabled === false
 */
export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ]
    .join(' ');
}
