buttonMessage(x) ->
    switch x % 4
        when 0 then msg = "Push Me"
        when 1 then msg = "And Then Just Touch Me"
        when 2 then msg = "Till I Can Get My"
        when 3 then msg = "Satisfaction"
    return msg
