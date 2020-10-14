array1 = []
array2 = [11, 12, 34, 21, 42, 67]

def merge_arrays(array1, array2):
    result = array1 + array2
    sorted_result = sorted(list(set(result)))
    return sorted_result

resul
