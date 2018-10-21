# Write an if statement that tests two number (numOne and numTwo), and prints the biggest number

num_one = 5
num_two = 9
if num_one > num_two
    p  "#{num_one} is bigger than #{num_two}"
else
    p  "#{num_two} is bigger than #{num_one}"
end

=begin
Store the user age
- If age is less than 18, print "Sorry, you can't drive yet"
- If the age is equal to or over 18, print "Drive away!"
- Bonus: If the user can't drive yet, tell them how many years they will have to wait. E.g. "Sorry, you have 4 years to wait until you can drive"
=end
user_age = 15
if user_age <18 
    # p "Sorry, you can't drive yet"
    p "Sorry, you have #{18-user_age} years to wait until you can drive"
elsif user_age >= 18
    p "Drive away!"
end

p "مرحبا بالعالم"

