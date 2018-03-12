using System;


namespace PICalc
{
    class Program
    {
        static void Main(string[] args)
        {

            DateTime startTime = DateTime.Now;
            pi();
            DateTime endTime = DateTime.Now;
            TimeSpan diff = endTime.Subtract(startTime);
            Console.WriteLine(diff.Seconds + "." + diff.Milliseconds);
        }

        public static void pi()
        {
            double realPi = 3.141592653589793;
            double epsilon = 0.00000001;
            double delta = 10;
            int k = 1;

            double pi_value = 0;
            int totalIterations = 0;
            while (delta > epsilon)
            {
                pi_value += Math.Pow(-1, (k + 1)) / (2 * k - 1);
                delta = Math.Abs((4 * pi_value) - realPi);
                k++;
            }
            totalIterations = k;
            pi_value = 4 * pi_value;
            Console.WriteLine("Total Iterations: " + totalIterations);
            Console.WriteLine("Pi: " + pi_value.ToString());

        }
    }
}