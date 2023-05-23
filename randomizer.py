import random
import string

def randomize(
                _option_,
                _length_
            ):

    if _length_ > 0 :
        if _option_ == '-p':
            string._characters_='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+'
        elif _option_ == '-s':
            string._characters_='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
        
        _generated_info_=''
        for _counter_ in range(0,_length_) :
            _generated_info_= _generated_info_ + random.choice(string._characters_)

        return _generated_info_
    
    else:
        return 'error'