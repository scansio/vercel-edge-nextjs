import { digitSum, isArmstrong, isPerfect, isPrime } from '@lib/utils';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextApiRequest) {
  const url = new URL(req.url!);
  const numberParam: number | string = url.searchParams.get('number') as string

  if (!numberParam || isNaN(numberParam as any)) {
    return NextResponse.json({ number: numberParam, error: true }, { status: 400 });
  }

  const number = parseInt(numberParam, 10);
  const properties = [];

  if (isArmstrong(number)) properties.push("armstrong");
  properties.push(number % 2 === 0 ? "even" : "odd");

  // Fetch fun fact
  const funFact = await fetch(`http://numbersapi.com/${number}/math`).then(res => res.text());

  return NextResponse.json({
    number,
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties,
    digit_sum: digitSum(number),
    fun_fact: funFact
  });
}
