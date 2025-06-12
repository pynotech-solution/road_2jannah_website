#include <iostream>
using namespace std;

int main() {
    // Variables to store the four inputs
    double num1, num2, num3, num4;

    // Prompt the user for input
    cout << "Enter four numbers:\n";
    cin >> num1 >> num2 >> num3 >> num4;

    // Calculate sum, product, and average
    double sum = num1 + num2 + num3 + num4;
    double product = num1 * num2 * num3 * num4;
    double average = sum / 4.0;

    // Display the results
    cout << "Sum: " << sum << endl;
    cout << "Product: " << product << endl;
    cout << "Average: " << average << endl;

    return 0;
}
