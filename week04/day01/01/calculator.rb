require "pry" #include some debugging tools

def add
    puts ""
    puts "what is you forst number"
    first_num = gets.chomp.to_f
    puts "what is you forst number"
    second_num = gets.chomp.to_f

    puts "#{first_num} + #{second_num} = #{first_num+second_num}"
end


puts "welcome to the calculator!"

def menu
puts ""
puts "(a) Addition"
puts "(s) Subtraction"
puts "(q) Quit"
puts ""
puts "What operation would you like to perform?"
gets.chomp
end

user_choice = menu()

while user_choice != "q"
    case user_choice 
    when "a"
        add
    end
    
    user_choice = menu()
end


puts ""
puts "thanks for using calculator"


