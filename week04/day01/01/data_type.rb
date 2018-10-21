require 'pry'


p "Hello"
p 'This is single line quoted'

result  = 2+2
p "the result is #{result}"
first_name = "jacques"
last_name = "Cousteau"
full_name = "#{first_name} #{last_name}"

p full_name

# two options for creating strings
#  - concatenation (adding them together)
# - interpolation (dynamic parts - substitution)

# String methods
# "".methods.sort

=begin
to commit multi line
=end

p "hello".upcase #() is optional
p "hello".downcase
p "hello".capitalize
p "hello".length

#figure out how to find out if a string is empty


#array
p "hello".chars
p "hello".empty?

lowercase_string = "hello"
p lowercase_string .upcase! # (!) change varible same as => lowercase_string = lowercase_string .upcase
p lowercase_string


name = "jacques"
binding.pry #it is same as dubeeger in javascript

first_letter = name[0]
p first_letter

#1_000_000 ==> 1000000


p 0.1
p 42
p 1234124
p 123_4124 #same as above
# underscore is ignore by ruby numbers
puts "test"


#arithmetic operators
puts 4+4
puts 4-2
puts 4*8
puts 8/2
puts 9%2

#find out how you can square a number (or cube a number). "to the power of"

puts 3 ** 2 # 3 power of 2

puts 3.pow(2)

puts 10==10
p 10<7

if 42 > 3
    p 'ttt'
end

# name = 'Groucho'
name = 'Gumo'
if name == 'Groucho'
    p 'Groucho is logged in'
elsif name == 'Harbo'
    p 'Harbo is logged in'
    elsif name == 'Gumo'
    p 'Gumo is logged in'
    else
    p 'Someone else is logged in'
end

p 4.odd?

p '42 is bigger' if 42 > 15
is_logged_in = true
#if user is logged in 
#print out 'here is your profile page'
#else
#print out 'you need to log in first'

#using an inline conditional
#print out 'you are logged in ' if the user is logged in

p 'you are loggen in' if is_logged_in

explorer_name  = 'jacques'
# if the name isn`t jacques
#     print out, 'that is a shame'
# else
#     print out, 'woohoo'

p 'that is a shame' if explorer_name != 'jacques'
p 'woohoo' if explorer_name == 'jacques'

unless explorer_name != 'jacques'
    p 'that is a shame. you aren`t jacques'
else
    p 'woohoo! you are jacques!'
end

x=5
y=3

unless x<y
    p "x(#{x}) is bigger number than y(#{y})"
    else
        p "y(#{y}) is bigger number than x(#{x})"
    end

    num_of_wheels = 1
    case num_of_wheels
    when 1
        p "unicycle"
        p "good"
    when 2
        p "bike"
    when 4
        p "Car"
    else   
        p "We aren`t sure"
    end

    current_name = "Moath1"
    case current_name
    when "Treva" then p "Lead Instructor"
    when "Moath" then p "TA"
        else
            p "Student"
        end

      p  (1..10).to_a
# => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

hour = 19
case hour
when 0..12
    p "good morning"
when 12..18
    p "Good afternoon"
else
    p "Good night"
end

letter = "f"

case letter
when "a".."e"
    p "it is early in the alphabet"
else
    p "it is later in the allphabet"
end