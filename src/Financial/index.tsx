import FinancialDatePicker from "./FinancialDatePicker";
import { useEffect, useState } from "react";
import getSales from "../Sales/SalesRepositories/getSales";
import { BarChart } from '@rsuite/charts';
import { HStack, Stat, StatGroup } from 'rsuite';

export default function Financial() {
  const [dataSet, setDataSet] = useState<(string | number)[][]>([]);
  const [selectedDateRange, setSelectedDateRange] = useState<{ from: Date, to: Date }>({ from: new Date(), to: new Date() });
  useEffect(() => {
    getSales(selectedDateRange.from, selectedDateRange.to).then((res) => {
      const from = new Date(selectedDateRange.from).setHours(0, 0, 0, 0);
      const to = new Date(selectedDateRange.to).setHours(23, 59, 59, 999);
      const dailySales = new Map<string, number>();
      if ((to - from) / 60 / 60 / 1000 < 24) {
        res.map((sale) => {
          const date = new Date(sale.createdAt);
          const day = `${date.toLocaleString('en-us', { hour: "2-digit" })}`;
          const currentSale = dailySales.get(day) || 0;
          const currentAmount = currentSale + sale.total;
          dailySales.set(day, currentAmount);
        });
      } else {
        res.map((sale) => {
          const date = new Date(sale.createdAt);
          const day = `${date.toLocaleString('en-us', { day: '2-digit' })} ${date.toLocaleString('en-us', { month: 'short' })} ${date.getFullYear()}`;
          const currentSale = dailySales.get(day) || 0;
          const currentAmount = currentSale + sale.total;
          dailySales.set(day, currentAmount);
        });
      }
      const temp: (string | number)[][] = []
      dailySales.forEach((value, key) => {
        temp.push([key, value]);
      });
      setDataSet(temp);
    })
  }, [selectedDateRange]);
  return (
    <div>
      <div>Financial Report</div>
      <StatGroup>
        <Stat>
          <Stat.Label>Profits</Stat.Label>
          <HStack spacing={10}>
            <Stat.Value>38,050</Stat.Value>
            <Stat.Trend>10%</Stat.Trend>
          </HStack>
        </Stat>

        <Stat>
          <Stat.Label>Revenue</Stat.Label>
          <HStack spacing={10}>
            <Stat.Value>4,635</Stat.Value>
            <Stat.Trend indicator="down">5%</Stat.Trend>
          </HStack>
        </Stat>

        <Stat>
          <Stat.Label>Cost</Stat.Label>
          <HStack spacing={10}>
            <Stat.Value>2,800</Stat.Value>
            <Stat.Trend appearance="subtle">10%</Stat.Trend>
          </HStack>
        </Stat>

        <Stat>
          <Stat.Label> Expenses</Stat.Label>
          <HStack spacing={10}>
            <Stat.Value>1,130</Stat.Value>
            <Stat.Trend appearance="subtle">3%</Stat.Trend>
          </HStack>
        </Stat>
      </StatGroup>
      <FinancialDatePicker selectedDateRange={selectedDateRange} setSelectedDateRange={setSelectedDateRange} />
      <BarChart name="Sales" data={dataSet} />
    </div>
  )
}