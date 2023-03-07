import java.util.Scanner;

class SpaceOptimizedUniqueSubsequence1 
{    
	Scanner in = new Scanner(System.in);
	final long mod = (long) (1e9) + 7;      
	public void solve() 
	{        
		int t = in.nextInt();        
		while (t--> 0) 
		{            
			int n = in.nextInt();             
			char a[] = in.next().toCharArray();             
			long dp[] = new long[27];             
			dp[0] = 1;            
			for (int i = 1; i <= n; i++) 
			{                
				for (int j = 1; j <= 26; j++)
				{                    
					long prev = dp[j - 1];                    
					int val = a[i - 1] - 'a';                    
					if (val == j - 1) {                        
						
						dp[j] = (dp[j] + prev) % mod;                    
						}             
					}           
				}             
			System.out.println(dp[26]);        
			}   
		} 
	} 