export class NumberFormatter {
    public static formatNumber(number: number): number | string {
        return Math.abs(number) > 999
          ? Math.sign(number) * (Math.round(Math.abs(number) / 100) / 10) + 'k'
          : Math.sign(number) * Math.abs(number);
    }
}