# i=1 
# while i<= 5
#     p "I: #{i}"
#     i+=1
# end

# j =5
# while j>=1
#     p "J: #{j}"
#     j-=1
#     end

#     index =1
#     until index ==6
#         p "index: #{index}"
#         index +=1
#     end

#     for idx in 0..5
# p "idx: #{idx}"
#     end

# #iterators
# 5.times do |i|
# p "this ran #{i}"
# end

# 5.downto(2) do |index|
#     puts "In the down loop, running for #{index}"
# end

# # write an iterative loop
# # That counts from 6 to 10
# # base it on the downto loop
# 6.upto(10) do |index|
#     puts "In the up loop, running for #{index}"
# end

# desired_letter = "c"
# user_choice = ""


# # while desired_letter is not equal to c
# #     keep getting the user to guess
# puts "What letter do you choose?"
#     user_choice=gets.chomp
#     #'gets' waits for user input, and can store the value in a varible 
#     #the 'gets' method will include the user hitting the enter key
#     #The chomp method removes the new line in that string
# p user_choice
# # prompt the user to type in their first name
# # save what they  type in as first_name
# # prompt the user to type in their last name
# # save what they type in as last_name 
# # print "your full name is --------  ----------"
# puts "enter first name"
#     first_name=gets.chomp
# puts "enter last name"
#     last_name=gets.chomp
#     puts "your full name is " +first_name +" "+last_name

# # while user_choice!=gets


desired_number = Random.rand(1..10)
puts "what number do you choose?"
    guessed_number = gets.chomp.to_i
    # gets.chomp.to_i to_i ==> parse to int
    p guessed_number
while guessed_number != desired_number
    puts "what`s not it. what number do you chose?"
    guessed_number = gets.chomp.to_i
    end

    puts "you got it right!"
