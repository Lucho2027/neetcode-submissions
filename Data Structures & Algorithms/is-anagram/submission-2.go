func isAnagram(s string, t string) bool {
     mapS := make(map[rune]int)
     mapT := make(map[rune]int)

    if len(s) != len(t) {
        return false
    }
    for _, valT := range t{
        mapT[valT] += 1;
    }
    
    for _, valS := range s {
        mapS[valS] += 1;
    }
    fmt.Println(mapS)
    fmt.Println(mapT)
    for key, count := range mapS {
        if mapT[key] != count {
            return false
        }

    }
  return true
}
