


def the_task(text)
    result =[];
    text.upcase!
 result.push("A=#{text.scan("A").count}") 
 result.push("C=#{text.scan("C").count}") 
 result.push("G=#{text.scan("G").count}") 
 result.push("T=#{text.scan("T").count}") 
 return result
end

p the_task("Tasmanian")