import React, { useState, useCallback } from "react";
import { useSearchParams} from "react-router-dom";
import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx"
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./CalcGraph.scss";

const fmt = (n) => {
  if (n === undefined || n === null || isNaN(n)) return "0";

  const abs = Math.abs(n);

  if (abs >= 10000000) return `${(n / 10000000).toFixed(2)} Cr`;
  if (abs >= 100000) return `${(n / 100000).toFixed(2)} L`;

  return Math.round(n).toLocaleString("en-IN");
};

const fmtINR = (n) => `₹ ${fmt(n)}`;

const toLakhs = (n) => parseFloat((n / 100000).toFixed(4));

const IconTrendUp = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const IconCircleDollar = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M8 10h6a2 2 0 0 1 0 4H8" />
  </svg>
);

const IconWaves = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconBuilding = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

const IconHeart = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconGradCap = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const TABS = [
  { id: "sip", label: "SIP / STEP UP", Icon: IconTrendUp },
  { id: "onetime", label: "ONE-TIME", Icon: IconCircleDollar },
  { id: "swp", label: "SWP", Icon: IconWaves },
  { id: "retirement", label: "RETIREMENT", Icon: IconBuilding },
  { id: "marriage", label: "MARRIAGE", Icon: IconHeart },
  { id: "education", label: "EDUCATION", Icon: IconGradCap },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip__label">Year {label}</div>

      {payload.map((p, i) => (
        <div className="custom-tooltip__row" key={i}>
          <span className="dot" style={{ background: p.color }} />

          <span>
            {p.name}: ₹{fmt(p.value * 100000)}
          </span>
        </div>
      ))}
    </div>
  );
};

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  prefix,
  suffix,
  minLabel,
  maxLabel,
}) {
  const minL =
    minLabel ??
    (prefix === "₹"
      ? `₹${min.toLocaleString("en-IN")}`
      : `${min}${suffix ?? ""}`);

  const maxL =
    maxLabel ??
    (prefix === "₹"
      ? `₹${max.toLocaleString("en-IN")}`
      : `${max}${suffix ?? ""}`);

  const pct = ((value - min) / (max - min)) * 100;

  const sliderBg = `linear-gradient(to right, #e8341c ${pct}%, #e8e8e5 ${pct}%)`;

  return (
    <div className="field">
      <div className="field__header">
        <span className="field__label">{label}</span>

        <div className="field__input-wrap">
          {prefix && <span className="field__prefix">{prefix}</span>}

          <input
            className="field__num"
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => {
              let v = parseFloat(e.target.value);

              if (isNaN(v)) v = min;

              v = Math.min(max, Math.max(min, v));

              onChange(v);
            }}
          />

          {suffix && <span className="field__suffix">{suffix}</span>}
        </div>
      </div>

      <div className="slider-wrap">
        <input
          className="slider"
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          style={{ background: sliderBg }}
          onChange={(e) => onChange(parseFloat(e.target.value))}
        />
      </div>

      <div className="field__range-row">
        <span className="field__range-label">{minL}</span>
        <span className="field__range-label">{maxL}</span>
      </div>
    </div>
  );
}

function SummaryCards({ cards }) {
  return (
    <div className="summary-cards">
      {cards.map((c, i) => (
        <div
          key={i}
          className={`summary-card${
            c.green ? " summary-card--green" : ""
          }${c.dark ? " summary-card--dark" : ""}`}
        >
          <div className="summary-card__label">{c.label}</div>

          <div className="summary-card__value">{c.value}</div>
        </div>
      ))}
    </div>
  );
}

function WealthChart({ data, lines }) {
  return (
    <div className="chart-card">
      <div className="chart-card__header">
        <div className="chart-card__title">
          <IconTrendUp size={13} />
          Wealth Projection
        </div>

        <div className="chart-card__legend">
          {lines.map((l, i) => (
            <div className="chart-card__legend-item" key={i}>
              <span className={l.dashed ? "dot-grey" : "dot-red"} />
              {l.name}
            </div>
          ))}
        </div>
      </div>

      <div className="chart-card__area">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="gradRed" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#e8341c"
                  stopOpacity={0.25}
                />

                <stop
                  offset="95%"
                  stopColor="#e8341c"
                  stopOpacity={0.04}
                />
              </linearGradient>

              <linearGradient id="gradGrey" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#9ca3af"
                  stopOpacity={0.2}
                />

                <stop
                  offset="95%"
                  stopColor="#9ca3af"
                  stopOpacity={0.04}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e8e8e5"
              vertical={false}
            />

            <XAxis
              dataKey="year"
              tick={{
                fontSize: 11,
                fontFamily: "SyneMono",
                fill: "#9ca3af",
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fontSize: 11,
                fontFamily: "SyneMono",
                fill: "#9ca3af",
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => v.toFixed(1)}
            />

            <Tooltip content={<CustomTooltip />} />

            {lines.map((l, i) => (
              <Area
                key={i}
                type="monotone"
                dataKey={l.key}
                name={l.name}
                stroke={l.dashed ? "#9ca3af" : "#e8341c"}
                strokeWidth={l.dashed ? 1.5 : 2.5}
                strokeDasharray={l.dashed ? "5 4" : undefined}
                fill={l.dashed ? "url(#gradGrey)" : "url(#gradRed)"}
                fillOpacity={1}
                dot={false}
                activeDot={{ r: 5, strokeWidth: 0 }}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function SIPTab() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [stepUp, setStepUp] = useState(10);

  const calc = useCallback(() => {
    const r = rate / 100 / 12;

    let totalInvested = 0;
    let corpus = 0;
    let m = monthly;

    for (let y = 1; y <= years; y++) {
      for (let mo = 0; mo < 12; mo++) {
        corpus = (corpus + m) * (1 + r);
        totalInvested += m;
      }

      m = m * (1 + stepUp / 100);
    }

    return {
      totalInvested,
      returns: corpus - totalInvested,
      corpus,
    };
  }, [monthly, rate, years, stepUp]);

  const chartData = useCallback(() => {
    const r = rate / 100 / 12;

    const data = [];

    let corpus = 0;
    let invested = 0;
    let m = monthly;

    for (let y = 1; y <= years; y++) {
      for (let mo = 0; mo < 12; mo++) {
        corpus = (corpus + m) * (1 + r);
        invested += m;
      }

      data.push({
        year: y,
        wealth: toLakhs(corpus),
        invested: toLakhs(invested),
      });

      m = m * (1 + stepUp / 100);
    }

    return data;
  }, [monthly, rate, years, stepUp]);

  const { totalInvested, returns, corpus } = calc();

  const data = chartData();

  return (
    <>
      <div className="input-panel">
        <Field
          label="MONTHLY INVESTMENT"
          value={monthly}
          onChange={setMonthly}
          min={500}
          max={100000}
          step={500}
          prefix="₹"
          minLabel="₹500"
          maxLabel="₹1,00,000"
        />

        <div className="input-divider" />

        <Field
          label="EXPECTED RETURN (P.A)"
          value={rate}
          onChange={setRate}
          min={5}
          max={30}
          suffix="%"
        />

        <div className="input-divider" />

        <Field
          label="TIME PERIOD"
          value={years}
          onChange={setYears}
          min={1}
          max={40}
          suffix="yr"
        />

        <div className="input-divider" />

        <div className="stepup-box">
          <div className="stepup-box__title">
            <IconTrendUp size={12} />
            Step-Up Strategy
          </div>

          <Field
            label="YEARLY INCREMENT"
            value={stepUp}
            onChange={setStepUp}
            min={0}
            max={50}
            suffix="%"
          />

          <div className="stepup-box__hint">
            Increasing your SIP by {stepUp}% every year helps beat inflation.
          </div>
        </div>
      </div>

      <div className="right-panel">
        <SummaryCards
          cards={[
            {
              label: "INVESTED AMOUNT",
              value: fmtINR(totalInvested),
            },
            {
              label: "EST. RETURNS",
              value: fmtINR(returns),
              green: true,
            },
            {
              label: "TOTAL VALUE",
              value: fmtINR(corpus),
              dark: true,
            },
          ]}
        />

        <WealthChart
          data={data}
          lines={[
            {
              key: "wealth",
              name: "Wealth",
            },
            {
              key: "invested",
              name: "Invested",
              dashed: true,
            },
          ]}
        />
      </div>
    </>
  );
}

function OneTimeTab() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const corpus = amount * Math.pow(1 + rate / 100, years);

  const returns = corpus - amount;

  const data = Array.from({ length: years }, (_, i) => {
    const y = i + 1;

    return {
      year: y,
      wealth: toLakhs(amount * Math.pow(1 + rate / 100, y)),
      invested: toLakhs(amount),
    };
  });

  return (
    <>
      <div className="input-panel">
        <Field
          label="TOTAL INVESTMENT"
          value={amount}
          onChange={setAmount}
          min={5000}
          max={10000000}
          step={5000}
          prefix="₹"
          minLabel="₹5,000"
          maxLabel="₹1,00,00,000"
        />

        <div className="input-divider" />

        <Field
          label="EXPECTED RETURN (P.A)"
          value={rate}
          onChange={setRate}
          min={5}
          max={30}
          suffix="%"
        />

        <div className="input-divider" />

        <Field
          label="TIME PERIOD"
          value={years}
          onChange={setYears}
          min={1}
          max={40}
          suffix="yr"
        />
      </div>

      <div className="right-panel">
        <SummaryCards
          cards={[
            {
              label: "INVESTED AMOUNT",
              value: fmtINR(amount),
            },
            {
              label: "EST. RETURNS",
              value: fmtINR(returns),
              green: true,
            },
            {
              label: "TOTAL VALUE",
              value: fmtINR(corpus),
              dark: true,
            },
          ]}
        />

        <WealthChart
          data={data}
          lines={[
            {
              key: "wealth",
              name: "Wealth",
            },
            {
              key: "invested",
              name: "Invested",
              dashed: true,
            },
          ]}
        />
      </div>
    </>
  );
}

function SWPTab() {
  const [initial, setInitial] = useState(1000000);

  const [withdrawal, setWithdrawal] = useState(10000);

  const [rate, setRate] = useState(8);

  const [years, setYears] = useState(10);

  const [delay, setDelay] = useState(0);

  const calcSWP = useCallback(() => {
    const r = rate / 100 / 12;

    let corpus = initial;

    let totalWithdrawn = 0;

    const data = [];

    for (let y = 1; y <= years; y++) {
      for (let mo = 0; mo < 12; mo++) {
        corpus *= 1 + r;

        if (y > delay) {
          corpus -= withdrawal;
          totalWithdrawn += withdrawal;
        }

        if (corpus < 0) corpus = 0;
      }

      data.push({
        year: y,
        corpus: toLakhs(corpus),
      });
    }

    return {
      corpus,
      totalWithdrawn,
      data,
    };
  }, [initial, withdrawal, rate, years, delay]);

  const { corpus, totalWithdrawn, data } = calcSWP();

  return (
    <>
      <div className="input-panel">
        <Field
          label="INITIAL INVESTMENT"
          value={initial}
          onChange={setInitial}
          min={100000}
          max={50000000}
          step={50000}
          prefix="₹"
          minLabel="₹1,00,000"
          maxLabel="₹5,00,00,000"
        />

        <div className="input-divider" />

        <Field
          label="MONTHLY WITHDRAWAL"
          value={withdrawal}
          onChange={setWithdrawal}
          min={1000}
          max={500000}
          step={1000}
          prefix="₹"
          minLabel="₹1,000"
          maxLabel="₹5,00,000"
        />

        <div className="input-divider" />

        <Field
          label="EXPECTED RETURN (P.A)"
          value={rate}
          onChange={setRate}
          min={4}
          max={15}
          suffix="%"
        />

        <div className="input-divider" />

        <Field
          label="TIME PERIOD"
          value={years}
          onChange={setYears}
          min={1}
          max={40}
          suffix="yr"
        />

        <div className="input-divider" />

        <Field
          label="SWP STARTS AFTER"
          value={delay}
          onChange={setDelay}
          min={0}
          max={10}
          suffix="yr"
        />
      </div>

      <div className="right-panel">
        <SummaryCards
          cards={[
            {
              label: "INITIAL INVESTMENT",
              value: fmtINR(initial),
            },
            {
              label: "TOTAL WITHDRAWN",
              value: fmtINR(totalWithdrawn),
              green: true,
            },
            {
              label: "REMAINING CORPUS",
              value: fmtINR(corpus),
              dark: true,
            },
          ]}
        />

        <WealthChart
          data={data}
          lines={[
            {
              key: "corpus",
              name: "Remaining Corpus",
            },
          ]}
        />
      </div>
    </>
  );
}
function RetirementTab() {
  const [currentAge, setCurrAge] = useState(30);

  const [retirementAge, setRetAge] = useState(60);

  const [lifeExpectancy, setLifeExp] = useState(80);

  const [hasSavings, setHasSavings] = useState(false);

  const [existingSavings, setExistSavings] = useState(0);

  const [monthlyExpenses, setMonthExp] = useState(30000);

  const [inflation, setInflation] = useState(6);

  const [returnBefore, setRetBefore] = useState(12);

  const [returnAfter, setRetAfter] = useState(7);

  const yearsToRetire = Math.max(1, retirementAge - currentAge);

  const yearsAfterRetire = Math.max(
    1,
    lifeExpectancy - retirementAge
  );

  const annualAtRetirement =
    monthlyExpenses *
    12 *
    Math.pow(1 + inflation / 100, yearsToRetire);

  const rAfter = returnAfter / 100;

  const rInfl = inflation / 100;

  const realRate = (rAfter - rInfl) / (1 + rInfl);

  let corpusNeeded;

  if (Math.abs(realRate) < 0.0001) {
    corpusNeeded =
      annualAtRetirement * yearsAfterRetire;
  } else {
    corpusNeeded =
      annualAtRetirement *
      (1 -
        Math.pow(
          1 + realRate,
          -yearsAfterRetire
        )) /
      realRate;
  }

  const existingGrown = hasSavings
    ? existingSavings *
      Math.pow(
        1 + returnBefore / 100,
        yearsToRetire
      )
    : 0;

  const additionalNeeded = Math.max(
    0,
    corpusNeeded - existingGrown
  );

  const r = returnBefore / 100 / 12;

  const n = yearsToRetire * 12;

  const monthlyNeeded =
    (additionalNeeded * r) /
    (Math.pow(1 + r, n) - 1);

  const data = [];

  let corpus =
    existingGrown > 0 ? existingSavings : 0;

  const rMonthly = returnBefore / 100 / 12;

  for (
    let y = currentAge + 1;
    y <= retirementAge;
    y++
  ) {
    for (let mo = 0; mo < 12; mo++) {
      corpus =
        (corpus + Math.max(0, monthlyNeeded)) *
        (1 + rMonthly);
    }

    data.push({
      year: y,
      corpus: toLakhs(corpus),
    });
  }

  return (
    <>
      <div className="input-panel">
        <div className="section-label section-label--blue">
          Personal Details
        </div>

        <Field
          label="CURRENT AGE"
          value={currentAge}
          onChange={(v) => {
            setCurrAge(v);

            if (v >= retirementAge) {
              setRetAge(v + 1);
            }
          }}
          min={18}
          max={70}
          suffix="yrs"
        />

        <div className="input-divider" />

        <Field
          label="RETIREMENT AGE"
          value={retirementAge}
          onChange={(v) =>
            setRetAge(Math.max(currentAge + 1, v))
          }
          min={31}
          max={80}
          suffix="yrs"
        />

        <div className="input-divider" />

        <Field
          label="LIFE EXPECTANCY"
          value={lifeExpectancy}
          onChange={setLifeExp}
          min={61}
          max={100}
          suffix="yrs"
        />

        <div className="input-divider" />

        <div className="field">
          <div className="field__header">
            <span className="field__label">
              EXISTING SAVINGS
            </span>
          </div>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                checked={hasSavings}
                onChange={() => setHasSavings(true)}
              />

              <span className="radio-dot" />

              Yes
            </label>

            <label>
              <input
                type="radio"
                checked={!hasSavings}
                onChange={() => setHasSavings(false)}
              />

              <span className="radio-dot" />

              No
            </label>
          </div>

          {hasSavings && (
            <div className="existing-savings-wrap">
              <Field
                label="SAVINGS AMOUNT"
                value={existingSavings}
                onChange={setExistSavings}
                min={0}
                max={50000000}
                step={10000}
                prefix="₹"
                minLabel="₹0"
                maxLabel="₹5,00,00,000"
              />
            </div>
          )}
        </div>

        <div className="input-divider" />

        <div className="section-label section-label--red">
          Finances
        </div>

        <Field
          label="MONTHLY EXPENSES"
          value={monthlyExpenses}
          onChange={setMonthExp}
          min={5000}
          max={500000}
          step={1000}
          prefix="₹"
          minLabel="₹5,000"
          maxLabel="₹5,00,000"
        />

        <div className="input-divider" />

        <Field
          label="RATE OF INFLATION"
          value={inflation}
          onChange={setInflation}
          min={2}
          max={15}
          suffix="%"
        />

        <div className="input-divider" />

        <div className="section-label section-label--green">
          Savings & Growth
        </div>

        <Field
          label="EXPECTED RETURN BEFORE RETIREMENT"
          value={returnBefore}
          onChange={setRetBefore}
          min={5}
          max={20}
          suffix="%"
        />

        <div className="input-divider" />

        <Field
          label="EXPECTED RETURN AFTER RETIREMENT"
          value={returnAfter}
          onChange={setRetAfter}
          min={4}
          max={12}
          suffix="%"
        />
      </div>

      <div className="right-panel">
        <SummaryCards
          cards={[
            {
              label:
                "ANNUAL INCOME REQUIRED AT " +
                retirementAge,
              value: fmtINR(annualAtRetirement),
            },
            {
              label:
                "ADDITIONAL INCOME NEEDED",
              value: fmtINR(additionalNeeded),
              green: true,
            },
            {
              label:
                "MONTHLY SAVINGS REQUIRED",
              value: fmtINR(monthlyNeeded),
              dark: true,
            },
          ]}
        />

        <WealthChart
          data={data}
          lines={[
            {
              key: "corpus",
              name: "Retirement Corpus",
            },
          ]}
        />
      </div>
    </>
  );
}
function MarriageTab() {
  const [currentCost, setCost] = useState(1000000);

  const [inflation, setInflation] = useState(6);

  const [childAge, setChildAge] = useState(5);

  const [marriageAge, setMarriageAge] =
    useState(21);

  const [roi, setRoi] = useState(8);

  const [existingSavings, setExSavings] =
    useState(0);

  const yearsLeft = Math.max(
    1,
    marriageAge - childAge
  );

  const futureCost =
    currentCost *
    Math.pow(1 + inflation / 100, yearsLeft);

  const existingGrown =
    existingSavings *
    Math.pow(1 + roi / 100, yearsLeft);

  const needed = Math.max(
    0,
    futureCost - existingGrown
  );

  const r = roi / 100 / 12;

  const n = yearsLeft * 12;

  const monthly =
    (needed * r) /
    (Math.pow(1 + r, n) - 1);

  const data = Array.from(
    { length: yearsLeft },
    (_, i) => {
      const y = i + 1;

      const goalReq =
        currentCost *
        Math.pow(1 + inflation / 100, y);

      let corpus =
        existingSavings > 0
          ? existingSavings
          : 0;

      const rM = roi / 100 / 12;

      for (let mo = 0; mo < y * 12; mo++) {
        corpus =
          (corpus + Math.max(0, monthly)) *
          (1 + rM);
      }

      return {
        year: y,
        goalReq: toLakhs(goalReq),
        invested: toLakhs(corpus),
      };
    }
  );

  return (
    <>
      <div className="input-panel">
        <Field
          label="CURRENT MARRIAGE EXPENSE"
          value={currentCost}
          onChange={setCost}
          min={100000}
          max={10000000}
          step={50000}
          prefix="₹"
          minLabel="₹1,00,000"
          maxLabel="₹1,00,00,000"
        />

        <div className="input-divider" />

        <Field
          label="EXPECTED INFLATION (P.A)"
          value={inflation}
          onChange={setInflation}
          min={2}
          max={15}
          suffix="%"
        />

        <div className="input-divider" />

        <Field
          label="CHILD'S CURRENT AGE"
          value={childAge}
          onChange={setChildAge}
          min={0}
          max={18}
          suffix="yrs"
        />

        <div className="input-divider" />

        <Field
          label="MARRIAGE AGE"
          value={marriageAge}
          onChange={setMarriageAge}
          min={6}
          max={30}
          suffix="yrs"
        />

        <div className="input-divider" />

        <Field
          label="EXPECTED RETURN ON INVESTMENT"
          value={roi}
          onChange={setRoi}
          min={4}
          max={15}
          suffix="%"
        />

        <div className="input-divider" />

        <Field
          label="EXISTING SAVINGS"
          value={existingSavings}
          onChange={setExSavings}
          min={0}
          max={5000000}
          step={10000}
          prefix="₹"
          minLabel="₹0"
          maxLabel="₹50,00,000"
        />
      </div>

      <div className="right-panel">
        <SummaryCards
          cards={[
            {
              label:
                "FUTURE COST OF MARRIAGE",
              value: fmtINR(futureCost),
            },
            {
              label:
                "MONTHLY INVESTMENT REQUIRED",
              value: fmtINR(monthly),
              dark: true,
            },
          ]}
        />

        <WealthChart
          data={data}
          lines={[
            {
              key: "goalReq",
              name: "Goal Requirement",
            },
            {
              key: "invested",
              name: "Invested",
              dashed: true,
            },
          ]}
        />
      </div>
    </>
  );
}

function EducationTab() {
  const [currentCost, setCost] =
    useState(3000000);

  const [inflation, setInflation] =
    useState(6);

  const [yearsLeft, setYears] =
    useState(10);

  const [roi, setRoi] = useState(12);

  const [existingSavings, setExSavings] =
    useState(30000);

  const futureCost =
    currentCost *
    Math.pow(1 + inflation / 100, yearsLeft);

  const existingGrown =
    existingSavings *
    Math.pow(1 + roi / 100, yearsLeft);

  const needed = Math.max(
    0,
    futureCost - existingGrown
  );

  const r = roi / 100 / 12;

  const n = yearsLeft * 12;

  const monthly =
    (needed * r) /
    (Math.pow(1 + r, n) - 1);

  const data = Array.from(
    { length: yearsLeft + 1 },
    (_, i) => {
      const y = i;

      const goalReq =
        currentCost *
        Math.pow(1 + inflation / 100, y);

      const rM = roi / 100 / 12;

      let corpus = existingSavings;

      for (let mo = 0; mo < y * 12; mo++) {
        corpus =
          (corpus + Math.max(0, monthly)) *
          (1 + rM);
      }

      return {
        year: y,
        goalReq: toLakhs(goalReq),
        invested: toLakhs(corpus),
      };
    }
  );

  return (
    <>
      <div className="input-panel">
        <Field
          label="CURRENT COST OF EDUCATION"
          value={currentCost}
          onChange={setCost}
          min={100000}
          max={10000000}
          step={100000}
          prefix="₹"
          minLabel="₹1,00,000"
          maxLabel="₹1,00,00,000"
        />

        <div className="input-divider" />

        <Field
          label="EXPECTED INFLATION (P.A)"
          value={inflation}
          onChange={setInflation}
          min={2}
          max={15}
          suffix="%"
        />

        <div className="input-divider" />

        <Field
          label="YEARS UNTIL EDUCATION"
          value={yearsLeft}
          onChange={setYears}
          min={1}
          max={30}
          suffix="yrs"
        />

        <div className="input-divider" />

        <Field
          label="EXPECTED RETURN ON INVESTMENT"
          value={roi}
          onChange={setRoi}
          min={5}
          max={20}
          suffix="%"
        />

        <div className="input-divider" />

        <Field
          label="EXISTING SAVINGS"
          value={existingSavings}
          onChange={setExSavings}
          min={0}
          max={5000000}
          step={10000}
          prefix="₹"
          minLabel="₹0"
          maxLabel="₹50,00,000"
        />
      </div>

      <div className="right-panel">
        <SummaryCards
          cards={[
            {
              label:
                "FUTURE COST OF EDUCATION",
              value: fmtINR(futureCost),
            },
            {
              label:
                "MONTHLY INVESTMENT REQUIRED",
              value: fmtINR(monthly),
              dark: true,
            },
          ]}
        />

        <WealthChart
          data={data}
          lines={[
            {
              key: "goalReq",
              name: "Goal Requirement",
            },
            {
              key: "invested",
              name: "Invested",
              dashed: true,
            },
          ]}
        />
      </div>
    </>
  );
}
const TAB_COMPONENTS = {
  sip: SIPTab,
  onetime: OneTimeTab,
  swp: SWPTab,
  retirement: RetirementTab,
  marriage: MarriageTab,
  education: EducationTab,
};

export default function CalcGraph() {
  const [searchParams] = useSearchParams();

  const initialTab =
      searchParams.get("tab") || "sip";
  const [activeTab, setActiveTab] =
    useState(initialTab);

  const ActiveComponent =
    TAB_COMPONENTS[activeTab];

  return (
      <>

    <div className="calc-root">
      <div className="titleHeadZ">
        <NavBar></NavBar>
        <span className="titleZ">Calculator</span>
      </div>
      <div className="calc-tabs">
        <div className="calc-tabs__inner">
          {TABS.map(({ id, label, Icon }) => (
            <button
              key={id}
              className={`calc-tabs__btn${
                activeTab === id
                  ? " calc-tabs__btn--active"
                  : ""
              }`}
              onClick={() => setActiveTab(id)}
            >
              <Icon size={13} />

              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="calc-body">
        <ActiveComponent />
      </div>
    </div>
        <Ql></Ql>
        </>
  );
}